export const userColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'user', headerName: 'User',
        width: 250,
        renderCell: (params) => {
            return (
                <div className="cellWithImage">
                    <img className="cellImage" src={params.row.image} alt="avatar" />
                    {params.row.username}
                </div>
            )

        }
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 250,

    },
    {
        field: 'age',
        headerName: 'Age',
        width: 150,

    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }

    }
]

export const userRows = [
    {
        id: 1,
        username: 'snow Adeline',
        image: 'https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg',
        status: 'active',
        email: 'snow1990@gmil.com',
        age: 38
    },
    {
        id: 2,
        username: 'bill gates',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU',
        status: 'passive',
        email: 'bill@gmil.com',
        age: 44
    },
    {
        id: 3,
        username: 'Creta Lydia',
        image: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
        status: 'pending',
        email: 'Creta@gmil.com',
        age: 28
    },
    {
        id: 4,
        username: 'Curtis Oliver',
        image: 'https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D',
        status: 'passive',
        email: 'Oliver@gmil.com',
        age: 30
    },
    {
        id: 5,
        username: 'Arthur Jack',
        image: 'https://www.hueconstruction.co.uk/wp-content/uploads/2016/04/Picture-of-person.png',
        status: 'active',
        email: 'JackArther103@gmil.com',
        age: 38
    },
    {
        id: 6,
        username: 'Oscar Carter',
        image: 'https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_640.jpg',
        status: 'passive',
        email: 'Oscar@gmil.com',
        age: 26
    },
    {
        id: 7,
        username: 'Alexander Hunter',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rsSzLimlQyniEtUV4-1raljzFhS45QBeAw&usqp=CAU',
        status: 'pending',
        email: 'Alexander@gmil.com',
        age: 38
    },
    {
        id: 8,
        username: 'Charlotte Sadie',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2DFkEQQFyU0vPOZoUP4mMyMGEjYycTfb3A&usqp=CAU',
        status: 'pending',
        email: 'Charlotte.@gmil.com',
        age: 32
    },
    {
        id: 9,
        username: 'Amelia Naomi',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS4bbQ6OwH_dP-uDegMCh_4jH35Oh2-gR9wKOGjKdO_Hze7nsSHzLwptM7w_qG7xnXkTE&usqp=CAU',
        status: 'active',
        email: 'Amelia@gmil.com',
        age: 27
    },
    {
        id: 10,
        username: 'Sophia Madison',
        image: 'https://resizing.flixster.com/KPURJgBZLzak4qZJxT8QCPy72lk=/740x380/v2/https://statcdn.fandango.com/MPX/image/NBCU_Fandango/34/295/thumb_2A9567BF-5A69-4D71-96E0-46203504CEC4.jpg',
        status: 'pending',
        email: 'snow1990@gmil.com',
        age: 31
    },
    {
        id: 11,
        username: 'Isabella Sofia',
        image: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/120376/s960_Universities_Minister_Michelle_Donelan.jpeg',
        status: 'active',
        email: 'Isabella@gmil.com',
        age: 29
    },
    {
        id: 12,
        username: 'Gianna Elizabeth',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbJn3fSVYwo7b5JttSjN-mAZuPIJ1yhroGqjgYHxQndUtXr5W2iw0qHuN4HT9YpjJAlc&usqp=CAU',
        status: 'passive',
        email: 'Gianna@gmil.com',
        age: 34
    },
]