import React from 'react'
import "./CSS/Chart.css";
import { AiOutlineUser } from 'react-icons/ai';

import { BsCodeSlash } from 'react-icons/bs';
 import { BsFillBookmarkFill } from 'react-icons/bs';
import { FiCopy } from 'react-icons/fi';
import { FaUserEdit } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <div>
            <div className='group-118  '  >
<div  className='rectangle-32'>
<div className='user'>
<img className='union-7' src='https://attachments.office.net/owa/mayank.singh%40alchemyinfotech.com/service.svc/s/GetAttachmentThumbnail?id=AAMkAGNhNjEyOWY3LTRhY2UtNGRjYi1hOWI4LWVkNmZkYzQ5NDkyOABGAAAAAAAOgJKSESCHTpReFO9hJfI9BwBQqZmfVQrsSZUV5OsGuWIyAAAAAAEMAABQqZmfVQrsSZUV5OsGuWIyAABNW4ioAAABEgAQACUm3T4nnp9DlmIL%2ByWR3Rk%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkZBRDY1NDI2MkM2QUYyOTYxQUExRThDQUI3OEZGMUIyNzBFNzA3RTkiLCJ0eXAiOiJKV1QiLCJ4NXQiOiItdFpVSml4cThwWWFvZWpLdDRfeHNuRG5CLWsifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsInVjIjoiOWUwZGE1MTEyNTczNDA3Y2FhYjQ5NzE5OWJlMGU1ZjMiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA3NDMyN2Y2OS1kNzEwLTRhMWUtOGQxOC00NDhmMWVjOGJjZjIiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MDExMjAyMzA0MDA5MDJcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCJjNTY5YmI2Ni02ZTRhLTRlNTAtOWRkMi0zZTU5YTYyMTJmMTBcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTEyMjcwODQ0NC0zMTE0NDkzOTg3LTMyMzYyNzQ3NjktMjkxODg5NjdcIn0iLCJuYmYiOjE2NDA5MzQ4MjAsImV4cCI6MTY0MDkzNTQyMCwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDc0MzI3ZjY5LWQ3MTAtNGExZS04ZDE4LTQ0OGYxZWM4YmNmMiIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QDc0MzI3ZjY5LWQ3MTAtNGExZS04ZDE4LTQ0OGYxZWM4YmNmMiIsImhhcHAiOiJvd2EifQ.D3-3aVmoqPMLICgbsFkneI3BifdH3fkrgnUvX_6pj8btbKsyKa23HGj5wDKr3TAdzKmHrSdjV1Fp69er7ctKhcnkpCa8WWDdh_NTKIYor03lLlpsDGUogxekT9hk-sIMFpUtXn9DtQe_c41noue7VFWo0sOiDDa8hCEvZZwcdh23yjAst5RBDkgcw-AvEG6dRvBWzoLqII1LFEmb9WyQ00Umstd-67nnOt__ac-otq4GD80dyrdRZ-6xfux92vE7YjLgAHUoljDucWVqP0vSIsLnLy_blZguCCD_624U5RWWUr1-XX1Xze4d_rqvmj6yD792uX_q-AMPbCMQLE09xg&X-OWA-CANARY=jgtCQQQAAU2KmpVbfL8zxYDKx4otzNkYWn4s5emav5-ESKZxyzqoamkLx4zpXJ0fWff-Pu4M03k.&owa=outlook.office.com&scriptVer=20211206021.07&animation=true'/>

    
<h2>User Name</h2>


</div>

</div>

<div className='practice' style={{display:"flex" , marginLeft:"60px", marginTop:"20px" }}>
    <div>
    <AiOutlineUser  style={{fontWeight:"bold", fontSize:"20px"}} />
    </div>
    <div style={{fontWeight:"bold", fontSize:"30px", marginLeft:"20px", marginTop:"5px"}}>
        <Link><h2 >Basic</h2></Link>
    </div>
</div>

<div style={{display:"flex" , marginLeft:"60px", marginTop:"20px" }}>
    <div>
    <BsCodeSlash  style={{fontWeight:"bold", fontSize:"20px"}} />
    </div>
    <div style={{fontWeight:"bold", fontSize:"30px", marginLeft:"20px", marginTop:"5px"}}>
<Link><h2>Practice</h2></Link>
    </div>
</div>
<div style={{display:"flex" , marginLeft:"60px", marginTop:"20px" }}>
    <div>
    <BsFillBookmarkFill  style={{fontWeight:"bold", fontSize:"20px"}} />
    </div>
    <div style={{fontWeight:"bold", fontSize:"30px", marginLeft:"20px", marginTop:"5px"}}>
        <Link><h2>SavedArticle</h2></Link>
    </div>
</div>
<div style={{display:"flex" , marginLeft:"60px", marginTop:"20px" }}>
    <div>
    <FiCopy  style={{fontWeight:"bold", fontSize:"20px"}} />
    </div>
    <div style={{fontWeight:"bold", fontSize:"30px", marginLeft:"20px", marginTop:"5px"}}>
        <Link><h2>Articles</h2></Link>
    </div>
</div>

<div style={{display:"flex" , marginLeft:"60px", marginTop:"20px" }}>
    <div>
    <FaUserEdit  style={{fontWeight:"bold", fontSize:"20px"}} />
    </div>
    <div style={{fontWeight:"bold", fontSize:"30px", marginLeft:"20px", marginTop:"5px"}}>
        <Link to="/EditProfile"><h2>Edit Profile</h2></Link>
    </div>
</div>

<div style={{display:"flex" , marginLeft:"60px", marginTop:"20px" }}>
    <div>
    <FiSettings  style={{fontWeight:"bold", fontSize:"20px"}} />
    </div>
    <div style={{fontWeight:"bold", fontSize:"30px", marginLeft:"20px", marginTop:"5px" }}>
        <Link><h2>Account Settings</h2></Link>
    </div>
</div>



</div>

        </div>
    )
}

export default Sidebar
