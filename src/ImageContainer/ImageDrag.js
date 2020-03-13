import React, {useState} from "react";
import {List, arrayMove} from "react-movable"
import {pictures} from '../constants/constants';
import {confirmAlert} from 'react-confirm-alert';

import 'react-confirm-alert/src/react-confirm-alert.css';
import '../App.css'

const ImageDrag = () => {
    const [items, setItems] = useState(pictures);
    return (
        <div className='img-container'>
            <h2>Image Drag and Drop</h2>
            <List
                values={items}
                onChange={({oldIndex, newIndex}) => {
                    confirmAlert({
                        title: 'Confirm to move',
                        message: 'Are you sure want to do this.',
                        buttons: [
                            {
                                label: 'Yes',
                                onClick: () => {
                                    setItems(arrayMove(items, oldIndex, newIndex))
                                }
                            },
                            {
                                label: 'No',
                                onClick: () => console.log("Can't move")
                            }
                        ]
                    });
                }
                }
                renderList={({children, props}) => <p {...props}>{children}</p>}
                renderItem={({value, props}) => <p {...props} ><img src={value} height={200} width={200} alt='draggedImages' /></p>}
            />
        </div>
    );
}

export default ImageDrag;
