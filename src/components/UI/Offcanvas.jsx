import "./offcanvas.css"
import ReactDOM from "react-dom"

const Offcanvas = (props) => {

    const portalElement = document.getElementById("overlays")

    const Backdrop = () => {
        return (
            <div className="backdrop" onClick={props.onHideCart} />
        )
    }

    const OffCanvasOverlay = (props) => {
        return (
            <div className="offcanvas">
                <div className="content">
                    {props.children}
                </div>
            </div>
        )
    }

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onHideCart} />, portalElement)}
            {ReactDOM.createPortal(<OffCanvasOverlay>{props.children}</OffCanvasOverlay>, portalElement)}
        </>
    )
}

export default Offcanvas