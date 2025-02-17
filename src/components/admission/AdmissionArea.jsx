import React, { useState } from "react";
import {
  FormInput,
  FormSelect,
  FormTextArea,
  RadioGroup,
  CheckboxInput,
} from "@/src/common/FormFields";

function AdmissionArea() {
  const [selectedSection, setSelectedSection] = useState("");
  const [showAadhaar, setShowAadhaar] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    currentAddress: "",
    permanentAddress: "",
    contactNo: "",
    email: "",
    dob: "",
    aadhaarNo: "",
    fatherOccupation: "",
    motherOccupation: "",
    nationality: "",
    religion: "",
    caste: "",
    section: "",
    admissionClass: "",
    motherTongue: "",
    previousSchool: "",
    secondLanguage: "",
    hasDisease: "",
    diseaseDetails: "",
    isExStudent: "",
    hasRelative: "",
    relativeName: "",
    relativeClass: "",
    agreed: false,
  });

  const schoolSections = [
    { value: "pre-primary", label: "Pre-Primary (Nursery to KG)" },
    { value: "primary", label: "Primary (Class 1 to 5)" },
    { value: "middle", label: "Middle School (Class 6 to 8)" },
    { value: "secondary", label: "Secondary (Class 9 & 10)" },
    { value: "senior-secondary", label: "Senior Secondary (Class 11 & 12)" },
  ];

  const casteOptions = [
    { value: "SC", label: "SC" },
    { value: "ST", label: "ST" },
    { value: "OBC", label: "OBC" },
    { value: "General", label: "General" },
  ];

  const languageOptions = [
    { value: "Bengali", label: "Bengali" },
    { value: "Hindi", label: "Hindi" },
    { value: "English", label: "English" },
    { value: "Urdu", label: "Urdu" },
    { value: "Punjabi", label: "Punjabi" },
    { value: "Telugu", label: "Telugu" },
    { value: "Tamil", label: "Tamil" },
    { value: "Marathi", label: "Marathi" },
    { value: "Gujarati", label: "Gujarati" },
    { value: "Kannada", label: "Kannada" },
    { value: "Malayalam", label: "Malayalam" },
    { value: "Odia", label: "Odia" },
    { value: "Assamese", label: "Assamese" },
    { value: "Maithili", label: "Maithili" },
    { value: "Sanskrit", label: "Sanskrit" },
    { value: "other", label: "Other" },
  ];

  const getClassOptions = (section) => {
    switch (section) {
      case "pre-primary":
        return [
          { value: "nursery", label: "Nursery" },
          { value: "kg1", label: "KG-I" },
          { value: "kg2", label: "KG-II" },
        ];
      case "primary":
        return [
          { value: "1", label: "Class 1" },
          { value: "2", label: "Class 2" },
          { value: "3", label: "Class 3" },
          { value: "4", label: "Class 4" },
          { value: "5", label: "Class 5" },
        ];
      case "middle":
        return [
          { value: "6", label: "Class 6" },
          { value: "7", label: "Class 7" },
          { value: "8", label: "Class 8" },
        ];
      case "secondary":
        return [
          { value: "9", label: "Class 9" },
          { value: "10", label: "Class 10" },
        ];
      case "senior-secondary":
        return [
          { value: "11-science", label: "Class 11 - Science (PCM/PCB)" },
          { value: "11-commerce", label: "Class 11 - Commerce" },
          { value: "11-arts", label: "Class 11 - Humanities" },
          { value: "12-science", label: "Class 12 - Science (PCM/PCB)" },
          { value: "12-commerce", label: "Class 12 - Commerce" },
          { value: "12-arts", label: "Class 12 - Humanities" },
        ];
      default:
        return [];
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "section") {
      setSelectedSection(value);
      setFormData((prev) => ({
        ...prev,
        admissionClass: "",
        section: value,
      }));
    }

    if (name === "admissionClass") {
      const classValue = value.split("-")[0];
      const classNum = parseInt(classValue);
      setShowAadhaar(!isNaN(classNum) && classNum >= 1);
    }
  };

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      className="checkout-area pb-90 pt-90 wow fadeInUp"
      data-wow-duration=".8s"
      data-wow-delay=".2s"
    >
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="checkbox-form">
                {/* Basic Details Section */}
                <h3 style={{ color: "#245d51" }}>Basic Details</h3>
                <div className="row">
                  <div className="col-md-6">
                    <FormInput
                      type="text"
                      name="studentName"
                      placeholder="Name of the Student"
                      required
                      value={formData.studentName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormInput
                      // type="date"
                      name="dob"
                      placeholder="Date of Birth"
                      required
                      value={formData.dob}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Additional Details */}
                <h3 style={{ color: "#245d51" }}>Additional Details</h3>
                <div className="row">
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="nationality"
                      placeholder="Nationality"
                      required
                      value={formData.nationality}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormInput
                      type="text"
                      name="religion"
                      placeholder="Religion"
                      value={formData.religion}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <FormSelect
                      name="caste"
                      placeholder="Select Caste"
                      options={casteOptions}
                      required
                      value={formData.caste}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Parents Information */}
                <h3 style={{ color: "#245d51" }}>Parents Information</h3>
                <div className="row">
                  <div className="col-md-6">
                    <FormInput
                      type="text"
                      name="fatherName"
                      placeholder="Father's Name"
                      required
                      value={formData.fatherName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormInput
                      type="text"
                      name="motherName"
                      placeholder="Mother's Name"
                      required
                      value={formData.motherName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormInput
                      type="text"
                      name="fatherOccupation"
                      placeholder="Father's Occupation"
                      value={formData.fatherOccupation}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormInput
                      type="text"
                      name="motherOccupation"
                      placeholder="Mother's Occupation"
                      value={formData.motherOccupation}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Address Details */}
                <h3 style={{ color: "#245d51" }}>Address Details</h3>
                <div className="row">
                  <div className="col-md-12">
                    <FormTextArea
                      name="currentAddress"
                      placeholder="Current Address"
                      required
                      value={formData.currentAddress}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <FormTextArea
                      name="permanentAddress"
                      placeholder="Permanent Address"
                      required
                      value={formData.permanentAddress}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Contact Details */}
                <h3 style={{ color: "#245d51" }}>Contact Details</h3>
                <div className="row">
                  <div className="col-md-6">
                    <FormInput
                      // type="tel"
                      name="contactNo"
                      placeholder="Contact Number"
                      required
                      value={formData.contactNo}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormInput
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Academic Details */}
                <h3 style={{ color: "#245d51" }}>Academic Details</h3>
                <div className="row">
                  <div className="col-md-6">
                    <FormSelect
                      name="section"
                      placeholder="Select Section"
                      options={schoolSections}
                      required
                      value={formData.section}
                      onChange={handleInputChange}
                    />
                  </div>
                  {selectedSection && (
                    <div className="col-md-6">
                      <FormSelect
                        name="admissionClass"
                        placeholder="Select Class"
                        options={getClassOptions(selectedSection)}
                        required
                        value={formData.admissionClass}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                  {showAadhaar && (
                    <div className="col-md-12">
                      <FormInput
                        type="text"
                        name="aadhaarNo"
                        placeholder="Aadhaar Card Number"
                        required
                        value={formData.aadhaarNo}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                  <div className="col-md-6">
                    <FormInput
                      type="text"
                      name="previousSchool"
                      placeholder="Previous School (if any)"
                      value={formData.previousSchool}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormSelect
                      name="motherTongue"
                      placeholder="Mother Tongue"
                      options={languageOptions}
                      required
                      value={formData.motherTongue}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <FormSelect
                      name="secondLanguage"
                      placeholder="Second Language"
                      options={languageOptions}
                      required
                      value={formData.secondLanguage}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <h3 style={{ color: "#245d51" }}>Additional Information</h3>
                <div className="row">
                  <div className="col-md-12">
                    <RadioGroup
                      question="Does the student have any disease?"
                      name="hasDisease"
                      value={formData.hasDisease}
                      onChange={(value) =>
                        handleRadioChange("hasDisease", value)
                      }
                    />
                  </div>
                  {formData.hasDisease === "yes" && (
                    <div className="col-md-12">
                      <FormTextArea
                        name="diseaseDetails"
                        placeholder="Disease Details"
                        value={formData.diseaseDetails}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                  <div className="col-md-12">
                    <RadioGroup
                      question="Is the student an ex-student of this school?"
                      name="isExStudent"
                      value={formData.isExStudent}
                      onChange={(value) =>
                        handleRadioChange("isExStudent", value)
                      }
                    />
                  </div>
                  <div className="col-md-12">
                    <RadioGroup
                      question="Does the student have any relative studying in this school?"
                      name="hasRelative"
                      value={formData.hasRelative}
                      onChange={(value) =>
                        handleRadioChange("hasRelative", value)
                      }
                    />
                  </div>
                  {formData.hasRelative === "yes" && (
                    <div className="row">
                      <div className="col-md-6">
                        <FormInput
                          type="text"
                          name="relativeName"
                          placeholder="Relative's Name"
                          value={formData.relativeName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <FormInput
                          type="text"
                          name="relativeClass"
                          placeholder="Relative's Class"
                          value={formData.relativeClass}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Declaration */}
                <div className="row mt-4">
                  <div className="col-md-12">
                    <p
                      className="declaration-text"
                      style={{ fontStyle: "italic", marginBottom: "10px" }}
                    >
                      I declare that the above informations are true to the best
                      of my knowledge. I understand that fees once paid at the
                      time of admission will neither be adjusted nor refunded.
                    </p>
                    <CheckboxInput
                      name="agreed"
                      label="I declare that all the information provided above is true to my knowledge"
                      checked={formData.agreed}
                      onChange={handleInputChange}
                      required={true}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="row mt-4">
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={!formData.agreed}
                    >
                      Submit Application
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
