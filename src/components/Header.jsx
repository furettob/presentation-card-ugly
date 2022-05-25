import Thumb from "./Thumb";

export default function Header({
  name,
  lastname,
  avatar,
  jobPosition,
  company
}) {
  return (
    <>
      <div className="pc-header">
        <div>
          <h3 className="pc-title">
            {lastname} {name}
          </h3>
          <h3 className="pc-subtitle">
            {jobPosition} @ {company}
          </h3>
        </div>
      </div>
      <Thumb avatar={avatar} name={name} />
    </>
  );
}
