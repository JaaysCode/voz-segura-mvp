// import React from 'react'
// import { FaThumbsUp, FaCheckCircle, FaHeart, FaComment } from 'react-icons/fa'


// const Comments  = () => {
//   return (
//     <div className="divide-y divide-purple-100">
//               {comments.map(comment => (
//                 <div 
//                   key={comment.id}
//                   className={`p-6 ${comment.isPinned ? 'bg-purple-50 border-l-4 border-purple-500' : ''} 
//                              ${comment.isHighlighted ? 'bg-yellow-50' : ''}`}
//                 >
//                   <div className="flex">
//                     <div className="bg-purple-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
//                       {comment.avatar}
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center mb-1">
//                         <span className="font-semibold">{comment.author}</span>
//                         {comment.isVerified && <FaCheckCircle className="ml-1 text-purple-600 text-sm" />}
//                         <span className="text-gray-500 text-sm ml-auto">{comment.date}</span>
//                       </div>
                      
//                       {comment.tags && comment.tags.length > 0 && (
//                         <div className="mb-2 flex flex-wrap gap-2">
//                           {comment.tags.map((tag, index) => (
//                             <span key={index} className="bg-purple-100 text-purple-800 text-xs py-1 px-2 rounded-full">
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
//                       )}
                      
//                       <p className="mb-3">{comment.content} 
//                         {comment.isPinned && <FaHeart className="inline-block ml-2 text-pink-500" />}
//                       </p>
                      
//                       <div className="flex items-center space-x-4">
//                         <button 
//                           className="flex items-center space-x-1 text-sm text-gray-600 hover:text-purple-700"
//                           onClick={() => handleLike(comment.id)}
//                         >
//                           <FaThumbsUp /> <span>{comment.likes}</span>
//                         </button>
//                         <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-purple-700">
//                           <FaComment /> <span>Responder</span>
//                         </button>
//                       </div>

//                       {/* Respuestas */}
//                       {comment.replies && comment.replies.length > 0 && (
//                         <div className="mt-4 space-y-4 pl-4 border-l-2 border-gray-200">
//                           {comment.replies.map(reply => (
//                             <div key={reply.id} className="flex">
//                               <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">
//                                 {reply.avatar}
//                               </div>
//                               <div className="flex-1">
//                                 <div className="flex items-center mb-1">
//                                   <span className="font-semibold">{reply.author}</span>
//                                   <span className="text-gray-500 text-xs ml-auto">{reply.date}</span>
//                                 </div>
//                                 <p className="mb-2 text-sm">{reply.content}</p>
//                                 <div className="flex items-center">
//                                   <button 
//                                     className="flex items-center space-x-1 text-xs text-gray-600 hover:text-purple-700"
//                                     onClick={() => handleLike(comment.id, reply.id)}
//                                   >
//                                     <FaThumbsUp /> <span>{reply.likes}</span>
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//   )
// }

// export default Comments
