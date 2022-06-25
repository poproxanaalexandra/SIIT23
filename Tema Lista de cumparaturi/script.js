let list = [];

        function adauga(form, event) {
            event.preventDefault();
            let produs = {};
            produs.nume = form.querySelector("[name='elementNou']").value.trim();
            list.push(produs);
            draw();
            document.querySelector("form").reset();
        }
        function markAsBuyed(i) {
            list[i].buyed = true;
            draw();
        }

        function showTable() {
            document.querySelector("#newTab").classList.remove("hidden");
            draw();
        }

        function draw() {
            let str = "";

            //https://github.com/AOEpeople/geb-spock-reports/issues/9 (pentru mine - de aici am luat rezolvarea de mai jos)

            for (i = 0; i < list.length; i++) {
                str += `<tr>
            <td class="${list[i].buyed === true ? "strike" : ""}"> ${list[i].nume} </td> 
            <td><input class="buyed" type="button" onclick="markAsBuyed(${i});" value="Mark as buyed"></td>           
                         </tr>`;
            }
            document.querySelector("#newTab tbody").innerHTML = str;

        }

        function compare(a, b) {
            return a - b;
        }

        function sort(z) {
            if (z === "az") {
                list.sort(function compare (a, b) {
                    let nume1 = a.nume.toUpperCase();
                    let nume2 = b.nume.toUpperCase();
                    if (nume1 < nume2) {
                        return -1;
                    }
                    if (nume1 > nume2) {
                        return 1;
                    }

                    return 0;
                });
            } else {
                list.sort(function compare (a, b) {
                    let nume1 = a.nume.toUpperCase();
                    let nume2 = b.nume.toUpperCase();
                    if (nume1 < nume2) {
                        return 1;
                    }
                    if (nume1 > nume2) {
                        return -1;
                    }

                    return 0;
                });
            }
            draw();
        }
        
