import React from "react";
// import Guidlines from "./Guidlines";

const TrialProcedure = () => {
  // const title = "Trial Procedure";
  // const discription = `

  // `;

  return (
    <div>
      {/* <Guidlines title={title} discription={discription}></Guidlines> */}
      <div className='container py-5 px-4'>
        <div className='row gx-2 my-5 py-5'>
          <div className='col-lg-12 order-lg-1 order-2 jms-h overflow-auto text-white'>
            <h2 className='text-center'>Trial Procedure</h2>
            <div className='mt-5'>
              <h4 className="fw-bold">Opening Statements</h4>
              <p>
                Every trial proceeds in basically the same way. Both parties are
                seated in the courtroom. In a criminal trial, this includes the
                prosecuting attorney for the government, as well as the
                defendant and their defense attorney. In civil cases, both the
                plaintiff and defendant, and their respective attorneys, if any,
                need to be present.
                <br />
                The attorneys will begin by making their opening statements. The
                attorneys use this time to give the jury an overview of the case
                they intend to present. They are just statements, however, and
                cannot be considered as evidence by the jury. The side bringing
                the case is the side that bears the burden of proof, and thus
                always goes first. This is the prosecuting attorney in a
                criminal case, or the plaintiff in a civil case. The defense
                then follows with their opening statement.
                <br />
                As the trial moves forward, the prosecutor or plaintiff presents
                their case, but the defense has an opportunity to respond. This
                process of two sides going back and forth, is the heart of our
                trial procedure, and is based on an adversarial system.
                <br />
              </p>
              <h4 className="fw-bold">Presenting the Prosecution/Plaintiff's Evidence</h4>
              <p>
                Opening statements are followed by the case-in-chief. The
                prosecutor or plaintiff’s attorney again goes first. They
                present evidence in the form of physical evidence or documents
                and also the testimony of witnesses. A witness is someone who
                has personal knowledge of a situation that may be helpful to the
                jury in deciding the outcome of the case. This personal
                knowledge is shared with the judge and jury through a series of
                questions between the witness and the plaintiff’s attorney or
                prosecutor. This is called direct examination.
                <br />
                Once the direct examination is finished, the defendant’s
                attorney gets an opportunity to question the witness. This is
                called cross examination. When the cross examination is
                complete, the judge may allow the plaintiff to ask more
                questions in response to things mentioned during cross
                examination. This is called re-direct examination.
                <br />
                Once the prosecutor or plaintiff has presented all their
                evidence and witness testimony, and the defendant has had a
                chance to cross examine, the prosecution or plaintiff then rests
                their case.
                <br />
              </p>
              <h4 className="fw-bold">Presenting the Defense's Evidence</h4>
              <p>
                The defendant then presents their evidence and witnesses in the
                same fashion; by direct examination. The plaintiff or
                prosecution is allowed to cross-examine, and the defendant gets
                to ask further questions on re-direct.
                <br />
                In a federal criminal case, because the burden of proof is
                always on the prosecution, the defendant never has the burden of
                doing anything. This means that the defendant does not have to
                present any evidence whatsoever. Additionally, the defendant has
                a constitutional right to remain silent in order to prevent
                self-incrimination when testifying. If the defendant doesn’t
                think the prosecution has proven the case, they may chose not to
                take the witness stand or to present any further evidence.
                <br />
                On the other hand, in civil cases, it is almost always in the
                defendant’s best interest to disprove the claims of the
                plaintiff. Therefore, the defendant will usually testify in a
                civil trial. Sometimes, the plaintiff calls the defendant as a
                witness. When this happens, the defendant is called a hostile
                witness.
                <br />
              </p>
              <h4 className="fw-bold">Closing Arguments</h4>
              <p>
                Once the attorneys for both sides have presented their evidence,
                they each will give closing arguments. This is their opportunity
                to summarize for the jury, and draw attention to the facts that
                support their side. The closing arguments are not evidence. The
                plaintiff or prosecutor goes first, followed by the defendant.
              </p>
              <h4 className="fw-bold">The Jury's Verdict</h4>
              <p>
                After closing arguments, the judge will give final jury
                instructions to the jury <br />
                The judge will instruct the jury to select a foreperson who will
                act as their organizer and spokesperson. The judge will give
                them a verdict form to complete, and they will then retire to
                the deliberation room to decide upon their verdict. All
                deliberations of the jury are private and confidential, and do
                not become part of the official court record. <br />
                Once the jury has reached a verdict, the foreperson alerts the
                court it has done so. This may take one hour, one day, or one
                week; there is no time limit or deadline. In federal court, all
                jury verdicts must be unanimous. All parties are called back to
                the courtroom and the foreperson or the clerk officially
                announces the verdict in open court. A criminal verdict can only
                be guilty or not guilty on each of the charges. When defendants
                are found not guilty, they are free to go and can’t be tried
                again for the same crime. This is called protection from Double
                Jeopardy, found in the 5th Amendment. If the defendant is found
                guilty, the punishment is to be decided by the judge, at a later
                date.
                <br />
                A civil verdict can be much more complicated, and may include
                whether or not the defendant’s actions or lack of actions caused
                injury to the plaintiff, and, if so, then the amount of
                compensation or penalty the plaintiff has to pay.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialProcedure;
