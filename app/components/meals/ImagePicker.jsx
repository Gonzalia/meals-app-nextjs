"use client"
import { useEffect, useRef, useState } from "react"
import classes from "./styles/image-picker.module.css"
import Image from "next/image"

const ImagePicker = ({ label, name }) => {
  const [image, setImage] = useState()
  const imageInput = useRef();


  const handlePickClick = () => {
    imageInput.current.click();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImage(fileReader.result)
    }
    fileReader.readAsDataURL(file)


  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!image && (
            <p>No image picked yet.</p>
          )}
          {image && (
            <Image src={image} alt="The image selected by the user." fill />
          )}

        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} onClick={handlePickClick} type="button">
          Pick an Image
        </button>
      </div>
    </div>
  )
}

export default ImagePicker