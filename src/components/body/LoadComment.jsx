import dateFormat from 'dateformat';

const LoadComment = ({ comments }) => {
    return comments.map((comment) => {
        return (
            <div key={comment.id} className="p-2">
                <h2>{comment.author}</h2>
                <p>{comment.comment}</p>
                <p>
                    {dateFormat(
                        comment.date,
                        'dddd, mmmm dS, yyyy, h:MM:ss TT',
                    )}
                    ;
                </p>
            </div>
        );
    });
};

// const LoadComment = ({ comments }) => {
//     return (
//         <div>
//             <h2>Comments</h2>
//             {comments.map((comments, index) => (
//                 <div key={comments.id}>
//                     <p>{comments.author}</p>
//                     <p>{comments.comment}</p>
//                     <p>{comments.date}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

export default LoadComment;
