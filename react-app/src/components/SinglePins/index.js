import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UpdatePinModal from "../UpdatePin";
import { displayOnePin, deleteAPin } from "../../store/pin";
import { getAllComments } from "../../store/comment";
import CreateCommentModal from "../CreateComment";
import EditCommentModal from "../EditComment";
import DeleteCommentModal from "../DeleteComment";
import DeletePinModal from "../DeletePin";

const PinDetailPage = () => {
    const dispatch = useDispatch()
    const { pinId } = useParams()

    const history = useHistory()
    const justPin = useSelector((state) => state?.pin)
    const pinStuff = Object.values(justPin)
    const pinDetail = useSelector((state) => state.pin[pinId])
    const sessionUser = useSelector((state) => state.session.user)
    const comments = useSelector((state) => state?.comment)
    const commentDetail = Object.values(comments)
    const userComment = useSelector((state) => state?.comment)
    // console.log(justPin)
    console.log(">>>>>>>>>>>", pinDetail)
    // console.log("comment detail:", commentDetail)
    const commentMapping = commentDetail.filter((comment) => comment?.pin_id === parseInt(pinId))
    // console.log("..........", commentMapping?.user_id)
    const homePage = () => {
        history.push('/')
    }
    useEffect(() => {
        dispatch(displayOnePin(pinId))
        dispatch(getAllComments())
    }, [dispatch, pinId])

    // const removePin = (e) => {
    //     e.preventDefault()
    //     dispatch(deleteAPin(pinId))
    //     history.push('/')
    // }
    
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
                    {sessionUser?.id === pinDetail?.users?.id && <UpdatePinModal pinId={pinId} />}
                    {sessionUser?.id === pinDetail?.users?.id && <DeletePinModal pinDetail={pinDetail} />}
                         {/* <button onClick={removePin} style={{ cursor: 'pointer' }}>Delete Pin</button> */}
                </div>
                <h2>Comments</h2>
                <CreateCommentModal />
                 
                <div>
                    {commentMapping.map(comment => (
                        <>
                        <div>{sessionUser?.first_name} {sessionUser?.last_name}: {comment?.content}</div>
                        <div> {sessionUser?.id === comment?.user_id && <EditCommentModal  comment={comment} /> }  </div> 
                        <div> {sessionUser?.id === comment?.user_id && <DeleteCommentModal  comment={comment} /> }  </div>
                        </>
                          
                        ))}
                        </div>                                            

            </div>
        </>
    )
}

export default PinDetailPage