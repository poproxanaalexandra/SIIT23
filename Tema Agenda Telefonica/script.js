
    let idxEdit = null;
    let list = [];

    function showTable() {
      document.querySelector("#newTab").classList.remove("hidden");
    }

    function adauga(form, event) {
      event.preventDefault();
      let pers = {};
      pers.nume = form.querySelector("[name='nume']").value.trim();
      pers.telefon = form.querySelector("[name='telefon']").value.trim();
     // if (valideazaTelefon(pers.telefon)===true){
      if (idxEdit === null) {
        list.push(pers);
      } else {
        list[idxEdit] = pers;
        idxEdit = null;
      }
      draw();
      showTable();
      document.querySelector("form").reset();
    }

    function draw() {
      let tabel = document.querySelector("#list tbody");
      let str = "";
      for (i = 0; i < list.length; i++) {
        str += `<tr>
            <td>${list[i].nume}</td>
            <td>${list[i].telefon}</td>
            <td><input class="editeaza" type="button" onclick="editeaza(${i});" value="Editeaza"></td>
              <td><input class="sterge" type="button" onclick="sterge(${i});" value="Sterge"></td>
            </tr>
    
    `;
      }
      tabel.innerHTML = str;
    }

    function sterge(idx) {
      if (confirm(`Esti sigur ca vrei sa stergi contactul ${list[idx].nume} din lista?`)){ 
            list.splice(idx, 1);
            draw();
      }
    }

    function editeaza(idx) {
      showTable();
      let pers = list[idx];
      document.querySelector("[name='nume']").value = pers.nume;
      document.querySelector("[name='telefon']").value = pers.telefon;
      idxEdit = idx;;

    }



    