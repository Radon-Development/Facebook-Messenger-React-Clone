import React, {useState} from "react";
import { useSelector } from 'react-redux';

import { GroupsSelector } from '../GroupsSlice';

import { TextField, Button } from "@material-ui/core";
import PhotoIcon from '@material-ui/icons/Photo';

import "./GroupInfo.scss";
import {changeGName, changeGImage} from "./Functions";

export default function GroupInfo(props) {

    const groups = useSelector(GroupsSelector);
    const group = groups.find(group => group.id === props.groupId);

    const [ newGName, setNewGName ] = useState(group.GName);

    return (
        <div className="GroupInfo">
            <input
                            accept="image/*"
                            className="fileInput"
                            multiple
                            id="fileButton"
                            type="file"
                            onChange={(e) => changeGImage(e, props.groupId, group.GName)}
                        />
            <label htmlFor="fileButton">
                <div 
                    className="groupImg" 
                    style={{backgroundImage: `url(${group.GImage})`}}
                    />
                <p> <PhotoIcon /> Edit </p>
            </label>
                

            <div className="GNameChange">
                <TextField
                    style={{width: "200px"}}
                    rowsMax={5}
                    multiline
                    value={newGName}
                    onChange={e => setNewGName(e.target.value)}
                    spellcheck="false"
                    variant="outlined"
                />

                {newGName !== group.GName ?
                    <div>
                        <Button onClick={() => setNewGName(group.GName)}>Cancel</Button>
                        <Button 
                            style={{color: "#0099FF"}} 
                            onClick={() => changeGName(newGName, props.groupId, group.GImage)}
                        >
                            Save
                        </Button>
                    </div>
                    : ""
                }
            </div>
        </div>
    )
}