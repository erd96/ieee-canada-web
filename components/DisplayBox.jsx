

const DisplayBox = ({ props }) => {
    const sections = {
        about: {
            header: "About",
            links: []
        },
        activities: {
            header: "Activities",
            links: []
        },
        volunteers: {
            header: "Volunteers",
            links: []
        },
        women: {
            header: "Women In Engineering",
            links: []
        },
        student: {
            header: "Student Activities",
            links: []
        },
        young: {
            header: "Young Professionals",
            links: []
        }
    }
  return (
    <div className=''>
            {props}
    </div>
  )
}

export default DisplayBox