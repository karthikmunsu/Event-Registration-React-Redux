import React, { Component } from 'react'
import { Chip } from "react-materialize";

export default function({tags, onCloseHandler}) {
  return (
    <React.Fragment>
      {tags.map((data, index) => <Chip key={data} close onClick={() => onCloseHandler(data)}>{data}</Chip>)}
    </React.Fragment>
  )
}

