import React, {useParams} from "react";
import '../CSS/CombineTextBox.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function InfoTextBox(props) {
    const header = props.header;
    const body = props.body;

    return(
        <div>
            <div className="InfoTextBox-header d-flex flex-column align-items-center">
                <h2>{header}</h2>
                <div className="InfoTextBox p-4 d-flex justify-content-center align-items-center">
                    <div className="InfoTextBox-text-wrapper d-flex justify-content-center align-items-center">
                        {body}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default InfoTextBox;