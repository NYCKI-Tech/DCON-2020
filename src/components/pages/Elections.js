import React from 'react';
import treasurerImage from '../../media/photos/treasurer.JPG';
import governorImage from '../../media/photos/governor.JPG';

const Elections = () => {
    return(<div className="outerContainer">
                <div className="innerContainer"> 
                    <div className="positionContainer">
                        <h2>District Governor</h2>
                        <img className="positionImage"
                             src={governorImage}
                             width="60%"/>
                        <div className="positionBody">The Governor shall have the duty of furthering the objects of Circle K International and
promoting the interests of Circle K Clubs within his/her District. He/she shall work closely
with other International and District offices to strengthen and expand Circle K. He/she
shall serve as a close liaison to the Kiwanis and Key Club District Governors and Advisors.
The Governor shall be the chief executive of the District, shall appoint all standing and
special District committees, serve as an ex-officio member of all District committees and
shall preside at the District Convention, all District conferences, and all meetings of the
District Board of Officers. He/she shall attend the International Convention and all
meetings of the International Council. The Governor shall be responsible for the
leadership training of club officers, for workshops which will be held at New York
Speaking and the District Convention and for developing all communication with clubs
for the purpose of bringing administrative aid to said clubs. The Governor shall be
responsible for contacting all presidents at least twice a month, and individually
contacting each president in the District at least three times throughout the service year.
The Governor shall develop and work within an established income and expense budget,
and shall work closely with the Kiwanis District Circle K Administrator on all matters
dealing with the operation of the District. The Governor may appoint, in consultation with
the District Administrator and with the approval of the Board of Officers, an interim
counselor to maintain contact with divisions which have no Lieutenant Governor. The District Governor is required to sign a Service Agreement upon the taking of their office
and adhere to the terms of said Service Agreement</div>
                    </div>
                    <div className="positionContainer">
                        <h2>Secretary</h2>
                        <div className="positionBody">The District Secretary shall keep minutes of the District Convention and of all meetings of
the District Board of Officers. Within fourteen (14) days past any special or regular board
meeting, he/she shall distribute a complete synopsis of all actions taken, meeting
minutes, and notices to the members of the District Board of Officers, the District
Administrator, the International Counselor, the District Kiwanis Governor, District Kiwanis
Secretary, and all New York District Circle K Club Presidents. He/she shall keep the official
District records; shall keep all official club records including collecting all club Monthly
Report Forms (MRFs); keep the Governor and Board of Officers informed of club reporting
and service hours status, and district goal progress if such goals are adopted. The District
Secretary shall submit a report to the annual convention and at such other times as the
Governor and the District Board of Officers may require. He/she shall submit to the proper
officials and committees all official communications received from Circle K International.
He/she shall maintain the records of all correspondence to the District. He/she shall
cooperate with the Governor in forwarding all official reports required by Circle K
International. He/she shall also perform such other duties as may be assigned by the
Governor or the District Board of Officers. The District Secretary is required to sign a
Service Agreement upon the taking of their office and adhere to the terms of said Service
Agreement.</div>
                    </div>
                    <div className="positionContainer">
                        <h2>Treasurer</h2>
                        <img className="positionImage"
                             src={treasurerImage}
                             width="60%"/>
                        <div className="positionBody">The Treasurer shall, under the supervision of the District Administrator, receive all District
dues, other District income and District reimbursement vouchers. The Treasurer shall
disburse these funds in the manner authorized by the Board of Officers. The accounts shall
at all times be open to inspection by the Governor, the Board of Officers, the District
Administrator, Kiwanis District Board of Trustees, and any authorized auditor. The
Treasurer shall attend all meetings of the Board of Officers, submit a financial report at the
annual convention, at all meetings of the Board of Officers and at such other times as the
Governor, the Board of Officers, or the Kiwanis District Board of Trustees may require. The
Treasurer shall also perform such other duties as may be assigned by the Governor or the Board of Officers. The District Treasurer is required to sign a Service Agreement upon the
taking of their office and adhere to the terms of said Service Agreement.</div>
                    </div>
                    <div className="positionContainer">
                        <h2>Editor</h2>
                        <div className="positionBody">The District Editor shall collect, edit, and arrange all articles for each issue of the District
publication, the number of which is specified by the District Governor. He/she shall
publish all directories and addendums as deemed necessary by the Governor or the Board
of Officers. He/she shall attend all meetings of the District Board of Officers. The District
Editor shall submit a report to the annual convention and at such other times as the
Governor and the District Board of Officers may require. He/she shall also perform other
duties as may be assigned by the Governor or the Board of Officers. The District Editor is
required to sign a Service Agreement upon the taking of their office and adhere to the
terms of said Service Agreement.</div>
                    </div>
                </div>
           </div>);
}

export default Elections;
