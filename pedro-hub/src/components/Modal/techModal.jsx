import StyledModal from "../../styles/styleModal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect } from "react";
import techModalSchema from "./techModalSchema";
import { TechContext } from "../../providers/techContext";
import Input from "../Input/input";

const TechModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(techModalSchema),
  });

  const { createTech, openModal, stateModal, setStateModal } =
    useContext(TechContext);

  const techInputs = (techformInput) => {
    createTech(techformInput);
    reset();
  };

  return (
    <>
      {stateModal && (
        <StyledModal>
          <section>
          <div>
            <p>Register Tech</p>
            <button onClick={() => setStateModal(false)}>X</button>
          </div>
          <form onSubmit={handleSubmit(techInputs)}>
            <Input
              type="text"
              placeholder="Type your tech"
              label="Name"
              error={errors.title}
              register={register("title")}
            />
            <p>Choose Status</p>
            <select name="select_tech" id="select_tech" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediario</option>
              <option value="Avançado">Avancado</option>
            </select>
            <button type="submit" >Register Tech</button>
          </form>
          </section>
        </StyledModal>
      )}
    </>
  );
};

export default TechModal;
