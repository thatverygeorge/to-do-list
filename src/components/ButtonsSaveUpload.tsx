import { ChangeEvent, useId } from "react";
import { useStore } from "@nanostores/react";
import { upload } from "../stores/tasks";
import { downloadURL as downloadURLStore } from "../stores/downloadURL";
import { isReadonly as isReadonlyStore } from "../stores/isReadonly";

interface IButtonsSaveUploadProps {
  modifier: string;
}

function ButtonsSaveUpload(props: IButtonsSaveUploadProps) {
  const { modifier } = props;
  const id = useId();

  const downloadURL = useStore(downloadURLStore);
  const isReadonly = useStore(isReadonlyStore);

  function handleUpload(evt: ChangeEvent<HTMLInputElement>) {
    if (evt.target.files) {
      upload(evt.target.files[0]);
    }
  }

  return (
    <section className={`save-upload ${modifier}__save-upload`}>
      <div>
        <a
          className="button button-save save-upload__button-save"
          href={downloadURL}
          download="just-do-it-tasks.json"
        >
          save
        </a>
      </div>

      <div>
        <input
          className="input input-save-upload save-upload__input visually-hidden"
          type="file"
          accept="application/json"
          name="upload"
          id={id}
          onChange={handleUpload}
          disabled={isReadonly}
        />
        <label className="button button-upload save-upload__button-upload" htmlFor={id}>
          upload
        </label>
      </div>
    </section>
  );
}

export default ButtonsSaveUpload;

