import './Profile.scss'

const Profile = () => {
  return (
    <div className='profile'>
      <div className='container'>
        <div className='left'>
            <div className='profile-image'>
                <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                />
            </div>
            <div className='user-name'>
                <h1>UserName</h1>
                <button>Analytics</button>
            </div>
            
        </div>
        <div className='right'>
            <div className='item'>
                <h1 className='main'>10+</h1>
                <p className='sub'>Projects</p>
                <p className='sub'>Completed</p>
            </div>
            <div className='item'>
                <h1 className='main'>4.5</h1>
                <p className='sub'>Your</p>
                <p className='sub'>Riview</p>
            </div>
            {/* <div className='item'>
                <h1 className='main'>4.5</h1>
                <p className='sub'>Your</p>
                <p className='sub'>Riview</p>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Profile
