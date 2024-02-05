import React from 'react'
import PropTypes from 'prop-types';
import Rodal from 'rodal'
import "rodal/lib/rodal.css";
import css from './AddCardModal.module.css'


const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
    const customStyles = {
        background: "rgb(58 58 58)",
        padding: "20px",
        width: "50%",
        top: "-3rem",
        height: "fit-content",
        maxWidth: "40rem"

    }
    const [title, setTitle] = React.useState('');
    const [detail, setDetail] = React.useState('');

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDetailChange = (e) => setDetail(e.target.value);
    const handleAddClick = () => {
        handleCardAdd(title, detail);
        setDetail("");
        setTitle("");
};

    return (
        <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
        <div className={css.container}>
            <div>
                <span className={css.label}>Card Title</span>
                <input type="text" className={css.input} value={title} onChange={handleTitleChange} />
            </div>

            <div>
                <span className={css.label}>Detail</span>
                <textarea
                    rows={10} className={css.input} value={detail}
                    onChange={handleDetailChange}
                />
            </div>

            <button
                disabled={title === "" && detail === ""}
                className={css.saveButton}
                onClick={handleAddClick}
            >
                Add
            </button>
            </div>
        </Rodal>
    )
}

AddCardModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleCardAdd: PropTypes.func.isRequired,
};

export default AddCardModal