import React, { useState } from 'react'

import { CFormInput } from '@coreui/react-pro'

function TestDelete() {
  const [visible, setVisible] = useState(false)
  const [img, setImg] = useState('')
  const [imgre, setImgre] = useState('')
  return (
    <>
      <div>
        <h1>testDelete</h1>
      </div>
      <div>
        <div className="mb-3">
          <CFormInput
            type="file"
            onChange={(e) => {
              let a = e.target.files[0]
              let v = URL.createObjectURL(a)
              setImg(a)
              console.log(a)
            }}
            id="formFile"
            label="Default file input example"
          />
        </div>
        <div>
          <img src={img} alt="" style={{ width: '300px' }} />
        </div>
      </div>
    </>
  )
}

export default TestDelete
