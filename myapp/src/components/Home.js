import React from 'react';

function Home() {
    const course = [
        { id: 1, Name: 'HTML',desc:'barashada Html basic ' },
        { id: 2, Name: 'Js', desc:'barashada js' },
        { id: 3, Name: 'CSS', desc:'barashada css oo dhamaystiran' },
        {id:4,Name:'Bootstrap', des:'barashada bootstrap dhamaystiran'}
    ];

    return (
        <>
        <h1>Home Page</h1>
    {course.map((course)=>(
                
    <div className="list-group">
    <a href="#" className="list-group-item mt-2 
    list-group-item-action flex-column align-items-start active">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1" key={course.id}>{course.Name}</h5>
        </div>
        <p class="mb-1">{course.desc}</p>
    
  </a>
      </div>
            ))}
        
          </>  
    );
    
}

export default Home;
