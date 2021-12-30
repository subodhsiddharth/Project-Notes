import React from 'react';
// import { Card } from 'antd';
import algo from "../Image/Algorithem.jpg"
import "./CSS/Card.css"



const data=[
    {
        image:"https://attachments.office.net/owa/mayank.singh%40alchemyinfotech.com/service.svc/s/GetAttachmentThumbnail?id=AAMkAGNhNjEyOWY3LTRhY2UtNGRjYi1hOWI4LWVkNmZkYzQ5NDkyOABGAAAAAAAOgJKSESCHTpReFO9hJfI9BwBQqZmfVQrsSZUV5OsGuWIyAAAAAAEMAABQqZmfVQrsSZUV5OsGuWIyAABNW4imAAABEgAQAEcPvT%2BrA29OiA0NOQ99Iv8%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkZBRDY1NDI2MkM2QUYyOTYxQUExRThDQUI3OEZGMUIyNzBFNzA3RTkiLCJ0eXAiOiJKV1QiLCJ4NXQiOiItdFpVSml4cThwWWFvZWpLdDRfeHNuRG5CLWsifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsInVjIjoiOWUwZGE1MTEyNTczNDA3Y2FhYjQ5NzE5OWJlMGU1ZjMiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA3NDMyN2Y2OS1kNzEwLTRhMWUtOGQxOC00NDhmMWVjOGJjZjIiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MDExMjAyMzA0MDA5MDJcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCJjNTY5YmI2Ni02ZTRhLTRlNTAtOWRkMi0zZTU5YTYyMTJmMTBcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTEyMjcwODQ0NC0zMTE0NDkzOTg3LTMyMzYyNzQ3NjktMjkxODg5NjdcIn0iLCJuYmYiOjE2NDA4Njg4MjEsImV4cCI6MTY0MDg2OTQyMSwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDc0MzI3ZjY5LWQ3MTAtNGExZS04ZDE4LTQ0OGYxZWM4YmNmMiIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QDc0MzI3ZjY5LWQ3MTAtNGExZS04ZDE4LTQ0OGYxZWM4YmNmMiIsImhhcHAiOiJvd2EifQ.Q3cIWnc2oynpi_MeG1_DNdNipJbmuC-iVOstZKNNsCUqQokVTeHzPQT29SFToSuqVqsZARHgbrpHFlhG-3R1Axjn4jlQ5DLSCj1mT6WQDZD8SUeAKRj5_cuqLOWsWA8pL40ZzM_zuvgfbsmY45x3l_gRnHZVaiKugGI1VWaR6iyUxOEmNmrOHV0pH-PWpuDS1DcDR2En4SBFiqlvHgQhfq_twjefRnsxF7sjpYjnlEOA1J4bDiFJUuuEeJrkP4mc8moObKycP6VoyjLLIqfGgHLg8CDoaaxqz7sivKyc4H9JF3tbUzrFpf1iyuA87dTEXwZoooL0VMQTrWkq6UAsYQ&X-OWA-CANARY=KUj89HP470WtRzW-JEBqwzBVLMGTy9kYDFv8zICJSA5oN0_XcldcMcwbZgXsUgWVaQ5UKMb9HHo.&owa=outlook.office.com&scriptVer=20211206021.07&animation=true",
    
        title:"Algorithm"
    },
    {
        image:"https://attachments.office.net/owa/mayank.singh%40alchemyinfotech.com/service.svc/s/GetAttachmentThumbnail?id=AAMkAGNhNjEyOWY3LTRhY2UtNGRjYi1hOWI4LWVkNmZkYzQ5NDkyOABGAAAAAAAOgJKSESCHTpReFO9hJfI9BwBQqZmfVQrsSZUV5OsGuWIyAAAAAAEMAABQqZmfVQrsSZUV5OsGuWIyAABNW4inAAABEgAQAMdBHFWUi31KhFXC8A6vA98%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkZBRDY1NDI2MkM2QUYyOTYxQUExRThDQUI3OEZGMUIyNzBFNzA3RTkiLCJ0eXAiOiJKV1QiLCJ4NXQiOiItdFpVSml4cThwWWFvZWpLdDRfeHNuRG5CLWsifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsInVjIjoiOWUwZGE1MTEyNTczNDA3Y2FhYjQ5NzE5OWJlMGU1ZjMiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA3NDMyN2Y2OS1kNzEwLTRhMWUtOGQxOC00NDhmMWVjOGJjZjIiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MDExMjAyMzA0MDA5MDJcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCJjNTY5YmI2Ni02ZTRhLTRlNTAtOWRkMi0zZTU5YTYyMTJmMTBcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTEyMjcwODQ0NC0zMTE0NDkzOTg3LTMyMzYyNzQ3NjktMjkxODg5NjdcIn0iLCJuYmYiOjE2NDA4Njk3MjEsImV4cCI6MTY0MDg3MDMyMSwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDc0MzI3ZjY5LWQ3MTAtNGExZS04ZDE4LTQ0OGYxZWM4YmNmMiIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QDc0MzI3ZjY5LWQ3MTAtNGExZS04ZDE4LTQ0OGYxZWM4YmNmMiIsImhhcHAiOiJvd2EifQ.QE1Wv7UAuJUlKH3gV0Xa79d3qNCcmUKbY9cCkQX8qGjeWuDIxnTHl-r2J-q5CUYmOgwX9yWksoEZQO_Pr3tz1iZMcQxEapHCv4EtQhVGzDmgcVebaZGZNhauxCi-00XpOwA6uuQIzJVuRzGKnH2eJFGetO04tN37UG86CYw_88V-HNJ43rvRgN8pN717BZhP3Tk0cUf0NQ_6GR9F5xgEXykwR_kADhMPv6ZDlWbYEV-AIya-2LmmNXfePZb5_6nVVNGgAZPKJtv2IFBoOi023Zr8VGDER4nvCpR7bn_tM2uAo430UjRAbmK_uUQi0rm7-RVuuckrb150h7jRNJvu9w&X-OWA-CANARY=Cun0UpNJHE2wqFyQDrGzduDZPN2Vy9kYr-GxI7anoJ3NyFp1izn293PZZcdHuon5rEpIDjHdpcI.&owa=outlook.office.com&scriptVer=20211206021.07&animation=true",
       
        title:"Database",
        background:"#CB210670"
        
    },
    {
        image:"https://attachments.office.net/owa/mayank.singh%40alchemyinfotech.com/service.svc/s/GetAttachmentThumbnail?id=AAMkAGNhNjEyOWY3LTRhY2UtNGRjYi1hOWI4LWVkNmZkYzQ5NDkyOABGAAAAAAAOgJKSESCHTpReFO9hJfI9BwBQqZmfVQrsSZUV5OsGuWIyAAAAAAEMAABQqZmfVQrsSZUV5OsGuWIyAABNW4inAAABEgAQAEanTT%2BjW7hNml08iaVcQe8%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkZBRDY1NDI2MkM2QUYyOTYxQUExRThDQUI3OEZGMUIyNzBFNzA3RTkiLCJ0eXAiOiJKV1QiLCJ4NXQiOiItdFpVSml4cThwWWFvZWpLdDRfeHNuRG5CLWsifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsInVjIjoiOWUwZGE1MTEyNTczNDA3Y2FhYjQ5NzE5OWJlMGU1ZjMiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA3NDMyN2Y2OS1kNzEwLTRhMWUtOGQxOC00NDhmMWVjOGJjZjIiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MDExMjAyMzA0MDA5MDJcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCJjNTY5YmI2Ni02ZTRhLTRlNTAtOWRkMi0zZTU5YTYyMTJmMTBcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTEyMjcwODQ0NC0zMTE0NDkzOTg3LTMyMzYyNzQ3NjktMjkxODg5NjdcIn0iLCJuYmYiOjE2NDA4Njk3MjEsImV4cCI6MTY0MDg3MDMyMSwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDc0MzI3ZjY5LWQ3MTAtNGExZS04ZDE4LTQ0OGYxZWM4YmNmMiIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QDc0MzI3ZjY5LWQ3MTAtNGExZS04ZDE4LTQ0OGYxZWM4YmNmMiIsImhhcHAiOiJvd2EifQ.QE1Wv7UAuJUlKH3gV0Xa79d3qNCcmUKbY9cCkQX8qGjeWuDIxnTHl-r2J-q5CUYmOgwX9yWksoEZQO_Pr3tz1iZMcQxEapHCv4EtQhVGzDmgcVebaZGZNhauxCi-00XpOwA6uuQIzJVuRzGKnH2eJFGetO04tN37UG86CYw_88V-HNJ43rvRgN8pN717BZhP3Tk0cUf0NQ_6GR9F5xgEXykwR_kADhMPv6ZDlWbYEV-AIya-2LmmNXfePZb5_6nVVNGgAZPKJtv2IFBoOi023Zr8VGDER4nvCpR7bn_tM2uAo430UjRAbmK_uUQi0rm7-RVuuckrb150h7jRNJvu9w&X-OWA-CANARY=l81-sU3PcUaQlsAEaULg2oBfGMSVy9kYVJxWhgxSOsU1hLpI4s6Fliu9e8Iemipjf6n33rjnSvU.&owa=outlook.office.com&scriptVer=20211206021.07&animation=true",
        
        title:"Shell",
        background:"#0c00b470"
    
    },

]

function CardData() {
    return (
        <div style={{display:"flex", marginLeft:"100px" , marginTop:"80px"}}>
             
      {/* {data.map((item) => (   
           <div>
            <img src={item.image} width="200" />
          </div>
          <div> {item.title}</div>
          
        
      ))} */}
<div style={{display:"flex"}} >


      {data.map((item)=>(
          <div  className='group-114' style={{marginLeft:"40px"}}>
              <div  className='group-111' style={{backgroundColor:item.background}} >
              <img src={item.image} className='asset-2300x-8'/>
                  </div>
         <div >
         <h2 className='algorithms'>{item.title}</h2>
             </div>
          </div>
          
      ))}
   </div>
  
  
        </div>
    )
}

export default CardData
