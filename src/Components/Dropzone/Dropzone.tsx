import { useState } from "react";
import { useDropzone } from "react-dropzone";
import photoSignLight from "../Graphic/Images/photoSignLight.png";
import photoSignDark from "../Graphic/Images/photoSignDark.png";
import "./DropzoneStyles.css";
import { BlackText } from "../../Components/UI/Texts/BlackText";
import {  useRecoilValue } from "recoil";
import { lightDark$ } from "../../Recoil/atoms";
import { UploadPhoto } from "../UI/Buttons/UploadButtons/UploadPhoto";
import { img } from "./DropzoneData";

function Dropzone() {
  const [file, setFile] = useState({});
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    fileRejections,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      'image/jpeg': [],
      "image/png": [],
      "image/gif": [],
    },
    onDrop: (acceptedFiles) => {
      setFile(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    },
    multiple: false,
  });
  const isLight = useRecoilValue(lightDark$);

  const isObject = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
  ): value is {
    path: string,
    preview: string
  } => typeof value === "object" && typeof value.path === "string";

  const fileInfo = acceptedFiles.map((file) => {
    if (isObject(file)) {
      return <p key={file.path}>Image File Name: {file.name}</p>;
    }
  });

  const errors = fileRejections.map(({ errors }) => (
    <p>
      {errors.map((e) => (
        <li key={e.code}>{e.message}</li>
      ))}
    </p>
  ));

  return (
    <div>
      <div
        {...getRootProps(
          isLight && isDragAccept
            ? { className: "dropzone light_background isAccept" }
            : isLight && isDragReject
            ? { className: "dropzone light_background isReject " }
            : !isLight && isDragAccept
            ? { className: "dropzone dark_background isAccept" }
            : !isLight && isDragReject
            ? { className: "dropzone dark_background isReject" }
            : isLight
            ? { className: "dropzone light_background lightBorder" }
            : { className: "dropzone dark_background darkBorder" }
        )}
      >
        <input className="input-zone" {...getInputProps()} />
        {acceptedFiles.length === 0 ? (
          <div className="text-center">
            <p className="dropzone-content gray">
              <BlackText>Drag here</BlackText> your file or{" "}
              <BlackText>Click here</BlackText> to upload
            </p>
            <img
              src={isLight ? photoSignLight : photoSignDark}
              alt="photoSing"
              id="photoSing"
            />
          </div>
        ) : (
          isObject(file) && (
            <img
              src={file.preview}
              alt="cat" 
              style={img}
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
            />
          )
        )}
      </div>

      <div className="fileName">
        {acceptedFiles.length === 0 && fileRejections.length === 0 ? (
          <span>No file selected</span>
        ) : fileRejections.length !== 0 ? (
          <span style={{ color: "#ff4747" }}>{errors[0]}</span>
        ) : (
          <>
            {fileInfo}
            <UploadPhoto file={file}/>
          </>
        )}
      </div>
    </div>
  );
}

export default Dropzone;
