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
import './singlepin.css'

const PinDetailPage = () => {
    const dispatch = useDispatch()
    const { pinId } = useParams()
    const history = useHistory()

    const pinDetail = useSelector((state) => state.pin[pinId])
    const sessionUser = useSelector((state) => state.session.user)
    const comments = useSelector((state) => state?.comment)
    const commentDetail = Object.values(comments)
    const user = useSelector((state) => state.user)   
    const commentMapping = commentDetail.filter((comment) => comment?.pin_id === parseInt(pinId))
    
    const homePage = () => {
        history.push('/')
    }
    useEffect(() => {
        dispatch(displayOnePin(pinId))
        dispatch(getAllComments())
    }, [dispatch, pinId])   
    
    return (
        <>
            <div className="single-pin-page-container">
                <div className="go-back-area">
                    <button className="go-back-button" onClick={homePage} style={{ cursor: 'pointer' }}>
                    <i className="fas fa-arrow-left"></i>
                    </button>
                  </div>  
                  <div className="pin-detail-container">
                    <div className="pin-image-container">
                        <img                        
                        className="single-pin"
                        src={pinDetail?.img_url} />
                    </div>
                  
                  <div className="single-pin-button-area">
                    <div className="single-pin-edit-and-delete">
                    {sessionUser?.id === pinDetail?.users?.id && <UpdatePinModal pinDetail={pinDetail} />}
                    {sessionUser?.id === pinDetail?.users?.id && <DeletePinModal pinDetail={pinDetail} />}                         
                </div>
                
                <div className="one-pin-title">{pinDetail?.title}</div>
                <div className="one-pin-description">{pinDetail?.description}</div>
                
                <div className="comment-container">
                <div className="comment-title">Comments</div>
                <CreateCommentModal />
                    {commentMapping.map(comment => (
                        <>                        
                        <div className="user-post-comment">{user[comment?.user_id]?.first_name} {user[comment?.user_id]?.last_name}: <span className="comment-itself"> {comment?.content}</span></div>
                        {/* <div className="comment-detail">{comment?.content}</div>                         */}
                        <div className="single-pin-edit-delete-comment"> {sessionUser?.id === comment?.user_id && <EditCommentModal  comment={comment} /> }   {sessionUser?.id === comment?.user_id && <DeleteCommentModal  comment={comment} /> }  </div>
                        </>                          
                        ))}
                        </div>
                        </div>
                        </div>                                            

            </div>
        </>
    )
}

export default PinDetailPage