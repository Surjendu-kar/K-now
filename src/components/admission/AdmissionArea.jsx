import React, { useState, useEffect } from "react";
import {
  FormInput,
  FormSelect,
  FormTextArea,
  RadioGroup,
  CheckboxInput,
} from "@/src/common/FormFields";
import { db } from "@/firebase/firebase";
import { doc, getDoc, addDoc, collection, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  admissionNo: Yup.string().required("Admission No is required"),
  studentName: Yup.string().required("Student's Name is required"),
  class: Yup.string().required("Class is required"),
  section: Yup.string(),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.date()
    .typeError("Date of Birth must be valid")
    .required("Date of Birth is required"),
  area: Yup.string().required("Area is required"),
  address: Yup.string().required("Address is required"),
  religion: Yup.string().required("Religion is required"),
  category: Yup.string().required("Category is required"),
  familyIncome: Yup.string().required("Family Income is required"),
  motherName: Yup.string().required("Mother's Name is required"),
  fatherName: Yup.string().required("Father's Name is required"),
  motherMobileNo: Yup.string()
    .required("Mother's Mobile is required")
    .matches(/^\d+$/, "Mother's Mobile must be a valid number")
    .length(10, "Mother's Mobile must be exactly 10 digits"),
  fatherMobileNo: Yup.string()
    .required("Father's Mobile is required")
    .matches(/^\d+$/, "Father's Mobile must be a valid number")
    .length(10, "Father's Mobile must be exactly 10 digits"),
  motherOccupation: Yup.string().required("Mother's Occupation is required"),
  fatherOccupation: Yup.string().required("Father's Occupation is required"),
  admissionDate: Yup.date()
    .typeError("Admission Date must be a valid date")
    .required("Admission Date is required"),
});

function AdmissionArea() {
  const [genderOptions, setGenderOptions] = useState([]);
  const [religionOptions, setReligionOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [classOptions, setClassOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    admissionNo: "",
    studentName: "",
    class: "",
    gender: "",
    dob: "",
    religion: "",
    area: "",
    category: "",
    familyIncome: "",
    motherName: "",
    fatherName: "",
    motherMobileNo: "",
    fatherMobileNo: "",
    motherOccupation: "",
    fatherOccupation: "",
    admissionDate: "",
    address: "",
  });

  useEffect(() => {
    const fetchDropdownOptions = async () => {
      try {
        const configRef = doc(db, "configuration", "dropDowns");
        const configDoc = await getDoc(configRef);

        if (configDoc.exists()) {
          const {
            gender = [],
            religion = [],
            category = [],
            classes = [],
          } = configDoc.data();

          setGenderOptions(gender.map((g) => ({ value: g, label: g })));
          setReligionOptions(religion.map((r) => ({ value: r, label: r })));
          setCategoryOptions(category.map((c) => ({ value: c, label: c })));
          setClassOptions(classes.map((c) => ({ value: c, label: c })));
        } else {
          console.error("No dropdown data found!");
        }
      } catch (error) {
        console.error("Error fetching dropdown options:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDropdownOptions();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setIsSubmitting(true);

      const formatDOB = (date) => {
        const dobDate = new Date(date);
        const month = dobDate.getMonth() + 1;
        const day = dobDate.getDate();
        const year = dobDate.getFullYear();
        return `${day}/${month}/${year}`;
      };

      const formattedDob = formData.dob ? formatDOB(formData.dob) : null;
      const formattedAdmissionDate = formData.admissionDate
        ? formatDOB(formData.admissionDate)
        : null;

      const admissionData = {
        ...formData,
        dob: formattedDob,
        admissionDate: formattedAdmissionDate,
        isConfirmed: false,
        created_by: "unknown",
        created_time: new Date(),
      };

      const admissionDocRef = await addDoc(
        collection(db, "admissions"),
        admissionData
      );
      const docId = admissionDocRef.id;

      const admissionLookupData = {
        admissionNo: formData.admissionNo,
        studentName: formData.studentName,
        class: formData.class,
        gender: formData.gender,
        dob: formattedDob,
        motherMobileNo: formData.motherMobileNo,
        fatherMobileNo: formData.fatherMobileNo,
      };

      await setDoc(
        doc(db, "lookup", "admission"),
        { [docId]: admissionLookupData },
        { merge: true }
      );

      toast.success("Admission created successfully.");

      setFormData({
        admissionNo: "",
        studentName: "",
        class: "",
        gender: "",
        dob: "",
        religion: "",
        area: "",
        category: "",
        familyIncome: "",
        motherName: "",
        fatherName: "",
        motherMobileNo: "",
        fatherMobileNo: "",
        motherOccupation: "",
        fatherOccupation: "",
        admissionDate: "",
        address: "",
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        console.error("Error adding admission: ", error);
        toast.error("Failed to create admission.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section
      className="checkout-area pb-90 pt-90 wow fadeInUp"
      data-wow-duration=".8s"
      data-wow-delay=".2s"
    >
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="checkbox-form">
                <div className="row">
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="admissionNo"
                      placeholder="Admission No *"
                      value={formData.admissionNo}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="studentName"
                      placeholder="Student's Name *"
                      value={formData.studentName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormSelect
                      name="class"
                      placeholder="Class *"
                      options={classOptions}
                      required
                      value={formData.class}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="date"
                      name="dob"
                      placeholder="DOB"
                      value={formData.dob}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="area"
                      placeholder="Area *"
                      value={formData.area}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="address"
                      placeholder="Address *"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="familyIncome"
                      placeholder="Family Income *"
                      value={formData.familyIncome}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="motherName"
                      placeholder="Mother's Name *"
                      value={formData.motherName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="fatherName"
                      placeholder="Father's Name *"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="tel"
                      name="motherMobileNo"
                      placeholder="Mother's Mobile *"
                      value={formData.motherMobileNo}
                      onChange={handleInputChange}
                      onKeyPress={(e) => {
                        if (!/[0-9-]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      maxLength={10}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="tel"
                      name="fatherMobileNo"
                      placeholder="Father's Mobile *"
                      value={formData.fatherMobileNo}
                      onChange={handleInputChange}
                      onKeyPress={(e) => {
                        if (!/[0-9-]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      maxLength={10}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="motherOccupation"
                      placeholder="Mother's Occupation *"
                      value={formData.motherOccupation}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="fatherOccupation"
                      placeholder="Father's Occupation *"
                      value={formData.fatherOccupation}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="date"
                      name="admissionDate"
                      placeholder="Admission Date"
                      value={formData.admissionDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormSelect
                      name="gender"
                      placeholder="Gender *"
                      options={genderOptions}
                      required
                      value={formData.gender}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormSelect
                      name="religion"
                      placeholder="Religion *"
                      options={religionOptions}
                      required
                      value={formData.religion}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormSelect
                      name="category"
                      placeholder="Category *"
                      options={categoryOptions}
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="row mt-4">
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AdmissionArea;
