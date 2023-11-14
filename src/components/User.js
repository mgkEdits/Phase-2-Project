import React from 'react'
import { Link } from 'react-router-dom'


function User({userRepo, loading}) {

  // const userdata = userRepo.slice(0,1);
  // console.log(userdata);
  // const user= userdata.owner
  // console.log(user);

  return (
    <div className='scn-repoBody'>
      <div className='userData'>
        <p className='title'>View Developer`s Work</p>
        <div className='bttn-wrap'>
          <a className='bttn' > <Link to="contactUs">Request Collaboration</Link></a>
          <a className='bttn' > <Link to="contactUs">Contact</Link></a>
        </div>
      </div>

      {loading ? (
        <div className='repo-Load'>Loading...</div> 
      ) : (
        <div className='repo-cards'>
        { userRepo.map((repo) => ( 
        <div key= {repo.id} className='repo-wrapper' >
        <div className='repo'>
            <h3>{repo.full_name}</h3>
            <h3>{repo.description}</h3>
            <p> Languages used :{repo.language}</p>
            <a className='bttn' > <Link to={repo.url}>Check Out Repository</Link></a>
        </div>
        </div>
        ))}
        </div>
      )}

    </div>
  )
}

export default User