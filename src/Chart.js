import React from 'react'
import './style.css'
 


const Chart = ({data}) => {
 
  const orange = data.casualLeaves / data.totalCasualLeaves * 100;
  const pink =  data.sickMedicalLeaves / data.totalSickMedicalLeaves * 100;
  const green = data.annualLeaves / data.totalAnnualLeaves * 100;
  const purple = data.maternityLeaves / data.totalMaternityLeaves * 100;
console.log(data)


  return (

    <>


      <div className="container-md">
        <h2 className='mb-5 mt-3'><strong>Leave Management</strong></h2>
        <div className="row">
          <div className="col-3">
            <div className="pie text-center" style={{ '--p': `${orange}`, '--c': "#ff8e26", '--b': "10px" }}>
              <h3 style={{ color: "#ff8e26" }}>{`${data.casualLeaves}/${data.totalCasualLeaves}`}</h3>
              <h6>Casual Leaves</h6>
            </div>
          </div>
          <div className="col-3">
            <div className="pie text-center" style={{ '--p': `${pink}`, '--c': "#f4407d", '--b': "10px" }}>
              <h3 style={{ color: "#f4407d" }}>{`${data.sickMedicalLeaves}/${data.totalSickMedicalLeaves}`}</h3>
              <h6>Sick/Medical Leaves</h6>
            </div>
          </div>
          <div className="col-3">
            <div className="pie text-center" style={{ '--p': `${green}`, '--c': "#95e880", '--b': "10px" }}>
              <h3 style={{ color: "#95e880" }}>{`${data.annualLeaves}/${data.totalAnnualLeaves}`}</h3>
              <h6>Annual Leaves</h6>
            </div>
          </div>
          <div className="col-3">
            <div className="pie text-center" style={{ '--p': `${purple}`, '--c': "#665af0", '--b': "10px" }}>
              <h3 style={{ color: "#665af0" }}>{`${data.maternityLeaves}/${data.totalMaternityLeaves}`}</h3>
              <h6>Maternity Leaves</h6>
            </div>
          </div>
        </div>
      </div>





      <div className="container my-5 pb-4">

        <h2 className='mb-5 mt-3'> <strong>History</strong> </h2>

        <div className="row">

          <div className="form-group col-4">
            <label> <strong>Choose Date To</strong> </label>
            <input type="date" className="form-control" placeholder="mm/dd/yyyy" />
          </div>


          <div className="form-group col-4">
            <label ><strong>Choose Date From</strong> </label>
            <input type="date" className="form-control" placeholder="mm/dd/yyyy" />
          </div>

          <div className="form-group col-4">
            <label> <strong>Chose Employe</strong> </label>
            <select id="inputState" className="form-select">
              <option>John Dee</option>
              <option>Ali Zain</option>
              <option>Askary</option>
              <option>Hasan Ali</option>
              <option>Noor Ali</option>
              <option>Sameer</option>
            </select>
          </div>

        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-8">
            <h4> Annual Leave Applied</h4>
            <p>18/12/2022 - 26/12/2022</p>
          </div>
          <div className="col-2">
            <button className='btn aprove mx-2'> Approve</button>
          </div>
          <div className="col-2">
            <button className='btn reject mx-2' > Reject</button>
          </div>
          <hr />
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-8">
            <h4> Annual Leave Applied</h4>
            <p>18/12/2022 - 26/12/2022</p>
          </div>
          <div className="col-2">
            <button className='btn aprove mx-2'> Approve</button>
          </div>
          <div className="col-2">
            <button className='btn reject mx-2' > Reject</button>
          </div>
          <hr />
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-8">
            <h4> Annual Leave Applied</h4>
            <p>18/12/2022 - 26/12/2022</p>
          </div>
          <div className="col-2">
            <button className='btn aprove mx-2'> Approve</button>
          </div>
          <div className="col-2">
            <button className='btn reject mx-2' > Reject</button>
          </div>
          <hr />
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-8">
            <h4> Annual Leave Applied</h4>
            <p>18/12/2022 - 26/12/2022</p>
          </div>
          <div className="col-2">
            <button className='btn aprove mx-2'> Approve</button>
          </div>
          <div className="col-2">
            <button className='btn reject mx-2' > Reject</button>
          </div>
          <hr />
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-8">
            <h4> Annual Leave Applied</h4>
            <p>18/12/2022 - 26/12/2022</p>
          </div>
          <div className="col-2">
            <button className='btn aprove mx-2'> Approve</button>
          </div>
          <div className="col-2">
            <button className='btn reject mx-2' > Reject</button>
          </div>
          <hr />
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-8">
            <h4> Annual Leave Applied</h4>
            <p>18/12/2022 - 26/12/2022</p>
          </div>
          <div className="col-2">
            <button className='btn aprove mx-2'> Approve</button>
          </div>
          <div className="col-2">
            <button className='btn reject mx-2' > Reject</button>
          </div>
          <hr />
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-8">
            <h4> Annual Leave Applied</h4>
            <p>18/12/2022 - 26/12/2022</p>
          </div>
          <div className="col-2">
            <button className='btn aprove mx-2'> Approve</button>
          </div>
          <div className="col-2">
            <button className=' btn reject mx-2' > Reject</button>
          </div>
          <hr />
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-8">
            <h4> Annual Leave Applied</h4>
            <p>18/12/2022 - 26/12/2022</p>
          </div>
          <div className="col-2">
            <button className='btn aprove mx-2'> Approve</button>
          </div>
          <div className="col-2">
            <button className='btn reject mx-2' > Reject</button>
          </div>
          <hr />
        </div>
      </div>



    </>

  )
}

export default Chart
