import { useParams } from "react-router-dom"


const CoursesDetials = () => {
    const params = useParams()

  return (
    <div>
      <h1>{params.id} Courses Details Page</h1>
    </div>
  )
}

export default CoursesDetials