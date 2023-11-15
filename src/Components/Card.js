import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let LikedCourses = props.LikedCourses;
    let SetLikedCourses = props.SetLikedCourses;

    function clickHandler() {
        if (LikedCourses.includes(course.id)) {
            //pehle se like h ye tho like remove karenge!
            SetLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Liked Removed");
        }
        else {
            //pehle se like nahe hai!
            //Tho insert karna h ye course liked courses me!
            if (LikedCourses.length === 0) {//pura khale h
                SetLikedCourses([course.id]);
            }
            else {
                //non-empty pehle se par kuch like h kise me
                SetLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    return (<div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden' >
        <div className='relative'>
            <img src={course.image.url} />

            <div className='w-[35px] h-[35px] bg-white rounded-full absolute right-1 bottom-[-10px] grid place-items-center'>
                <button onClick={clickHandler}>
                    {LikedCourses.includes(course.id) ?  <FcLike fontSize="2rem" />: <FcLikePlaceholder fontSize="2rem" />}
                </button>
            </div>

        </div>


        <div>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-3 text-white text-sm'>
                {
                    course.description.length>100 ? (course.description.substr(0,100))+"..."  : (course.description)
                }
                </p>
        </div>

    </div>)

}

export default Card;
