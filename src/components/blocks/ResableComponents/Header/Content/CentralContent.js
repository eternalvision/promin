import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { pngIcoSmall } from "../../../../../img/50";
import DarkMode from "./DarkMode";
import Modal from "react-modal";

Modal.setAppElement("#root");

function CentralContent() {
  const [isOpenEntry, setIsOpenEntry] = useState(false);
  const [isOpenBlog, setIsOpenBlog] = useState(false);
  const [isOpenPhoto, setIsOpenPhoto] = useState(false);
  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const [isOpenMusic, setIsOpenMusic] = useState(false);

  function ModalEntry() {
    setIsOpenEntry(!isOpenEntry);
  }

  function ModalBlog() {
    setIsOpenBlog(!isOpenBlog);
  }

  function ModalPhoto() {
    setIsOpenPhoto(!isOpenPhoto);
  }

  function ModalVideo() {
    setIsOpenVideo(!isOpenVideo);
  }

  function ModalMusic() {
    setIsOpenMusic(!isOpenMusic);
  }

  return (
    <>
      <li className="Central-header-content">
        <section className="d1">
          <form action="" method="get">
            <input name="s" placeholder="Введите текст" type="search" />
            <button type="submit">
              <img width={25} height={25} src={pngIcoSmall.searchwhite} alt="" />
            </button>
          </form>
        </section>
        <section className="d2">
          <Dropdown text="Создать">
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={ModalEntry}
                text={
                  <>
                    <img width={25} height={25} src={pngIcoSmall.entry} alt="" />
                    <span className="spancreated">Запись</span>
                  </>
                }
              />
              <Dropdown.Item
                onClick={ModalBlog}
                text={
                  <>
                    <img width={25} height={25} src={pngIcoSmall.blog} alt="" />
                    <span className="spancreated">Блог</span>
                  </>
                }
              />
              <Dropdown.Item
                onClick={ModalPhoto}
                text={
                  <>
                    <img width={25} height={25} src={pngIcoSmall.camera} alt="" />
                    <span className="spancreated">Фото</span>
                  </>
                }
              />
              <Dropdown.Item
                onClick={ModalVideo}
                text={
                  <>
                    <img width={25} height={25} src={pngIcoSmall.video} alt="" />
                    <span className="spancreated">Видео</span>
                  </>
                }
              />
              <Dropdown.Item
                onClick={ModalMusic}
                text={
                  <>
                    <img width={25} height={25} src={pngIcoSmall.music} alt="" />
                    <span className="spancreated">Музыка</span>
                  </>
                }
              />
            </Dropdown.Menu>
          </Dropdown>
        </section>
        <section className="d3">
          <DarkMode />
        </section>
      </li>
      <Modal isOpen={isOpenEntry} onRequestClose={ModalEntry}>
        <button onClick={ModalEntry}>x</button>
        entry
      </Modal>
      <Modal isOpen={isOpenBlog} onRequestClose={ModalBlog}>
        <button onClick={ModalBlog}>x</button>
        blog
      </Modal>
      <Modal isOpen={isOpenPhoto} onRequestClose={ModalPhoto}>
        <button onClick={ModalPhoto}>x</button>
        photo
      </Modal>
      <Modal isOpen={isOpenVideo} onRequestClose={ModalVideo}>
        <button onClick={ModalVideo}>x</button>
        video
      </Modal>
      <Modal isOpen={isOpenMusic} onRequestClose={ModalMusic}>
        <button onClick={ModalMusic}>x</button>
        music
      </Modal>
    </>
  );
}

export default CentralContent;
