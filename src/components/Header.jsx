import Thumb from "./Thumb";

export default function Header({
                                   name,
                                   lastname,
                                   avatar,
                                   jobPosition,
                                   company,
                                   shippedProject,
                                   isEmph
                               }) {
    return (
        <>
            <div className={isEmph ? "pc-header pc-header--emph" : "pc-header"}>
                <div>
                    <h3 className="pc-title">
                        {lastname} {name}
                    </h3>
                    <h3 className="pc-subtitle">
                        {jobPosition} @ {company}<br/>
                        {shippedProject} progetti realizzati
                    </h3>
                </div>
            </div>
            <Thumb avatar={avatar} name={name} />
        </>
    );
}
