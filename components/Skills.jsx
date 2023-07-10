import React from 'react'
import ProgressCircle from './ProjectCircle';
import skillsData from './skillsdsata';
import Image from 'next/image';

const Skills = () => {
  return (
    <div>
      {/* {
        skillsData.map((item) => {
          const { imageUrl } = item;
          return (
            <div>
            <Image key={item.id} src={imageUrl} alt='logo' width={100} height={100} />
            <ProgressCircle />
            </div>
          )
        })
      } */}
      
      
    </div>
  )
}

export default Skills;