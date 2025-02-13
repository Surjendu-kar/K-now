import { addSort } from "@/features/activityFilter";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

export const CommonSort = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { activitySort } = useSelector((state) => state.activityFilter);
  const { sort, perPage } = activitySort;
  const currentPath = router.pathname;

  const isCoCurricular = currentPath === "/co-curricular-activities";

  const basicSortOptions = [
    { id: 1, name: "Sort by (default)", value: "", isChecked: sort === "" },
    {
      id: 2,
      name: "Name (A-Z)",
      value: "name_asc",
      isChecked: sort === "name_asc",
    },
    {
      id: 3,
      name: "Name (Z-A)",
      value: "name_desc",
      isChecked: sort === "name_desc",
    },
  ];

  const coCurricularOptions = [
    {
      id: 6,
      name: "Duration (Shortest First)",
      value: "duration_asc",
      isChecked: sort === "duration_asc",
    },
    {
      id: 7,
      name: "Duration (Longest First)",
      value: "duration_desc",
      isChecked: sort === "duration_desc",
    },
    {
      id: 8,
      name: "Capacity (Lowest First)",
      value: "participants_asc",
      isChecked: sort === "participants_asc",
    },
    {
      id: 9,
      name: "Capacity (Highest First)",
      value: "participants_desc",
      isChecked: sort === "participants_desc",
    },
  ];

  const sortOptions = isCoCurricular
    ? [...basicSortOptions, ...coCurricularOptions]
    : basicSortOptions;

  const sortHandler = (e, id) => {
    if (sortOptions.find((option) => option.id === id)?.isChecked) {
      dispatch(addSort(""));
    } else {
      dispatch(addSort(e.target.value));
    }
  };

  return (
    <>
      <ul className="list-wrap">
        {sortOptions.map((item) => (
          <li key={item.id}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={item.isChecked}
                value={item.value}
                onChange={(e) => sortHandler(e, item.id)}
                style={{ cursor: "pointer" }}
              />
              <label className="form-check-label">{item.name}</label>
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .form-check-input {
          transition: transform 0.3s ease;
        }
        .form-check-input:hover {
          transform: scale(1.1);
        }
        .form-check-label {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
