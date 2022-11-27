import './ModalSpecificationStyles.css'

const ModalSpecification = (props) => {
    return (
        <div className={`ModalSpecification${props.visible ? '-active' : ''}`}>
            <div className={`ModalSpecification__body${props.visible ? '-active' : ''}`}>
            </div>
        </div>
    );
}

export default ModalSpecification;