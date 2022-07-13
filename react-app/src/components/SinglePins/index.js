import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UpdatePinModal from "../UpdatePin";
import { displayOnePin, deleteAPin } from "../../store/pin";
import { getAllComments } from "../../store/comment";
import CreateCommentModal from "../CreateComment";
import EditCommentModal from "../EditComment";

const PinDetailPage = () => {
    const dispatch = useDispatch()
    const { pinId } = useParams()

    const history = useHistory()
    const pinDetail = useSelector((state) => state.pin[pinId])
    const sessionUser = useSelector((state) => state.session.user)
    const comments = useSelector((state) => state?.comment)
    const commentDetail = Object.values(comments)
    const userComment = useSelector((state) => state?.comment)
    console.log(userComment)
    console.log(">>>>>>>>>>>", comments)
    console.log("comment detail:", commentDetail)
    const commentMapping = commentDetail.filter((comment) => comment?.pin_id === parseInt(pinId))
    console.log("..........", commentMapping)
    const homePage = () => {
        history.push('/')
    }
    useEffect(() => {
        dispatch(displayOnePin(pinId))
        dispatch(getAllComments())
    }, [dispatch, pinId])

    const removePin = (e) => {
        e.preventDefault()
        dispatch(deleteAPin(pinId))
        history.push('/')
    }

    return (
        <>
            <div>
                <div>
                    <button onClick={homePage} style={{ cursor: 'pointer' }}>Go Back</button>
                    <img
                        src={pinDetail?.img_url} />
                </div>
                <div>Pin Title: {pinDetail?.title}</div>
                <div>Pin Description: {pinDetail?.description}</div>
                <div>{pinDetail?.link}</div>

                <div>
                    {sessionUser.id === pinDetail?.users?.id && <UpdatePinModal pinId={pinId} />}
                    {sessionUser.id === pinDetail?.users?.id &&
                        <button onClick={removePin} style={{ cursor: 'pointer' }}>Delete Pin</button>}
                </div>
                <CreateCommentModal />
                <EditCommentModal comments={comments}/>
                <div>
                    {commentMapping.map((comment) => (
                        <div>{sessionUser?.first_name}{sessionUser?.last_name}: {comment?.content}
                        </div>
                    ))}</div>

            </div>
        </>
    )
}

export default PinDetailPage