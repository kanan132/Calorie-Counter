document.getElementById("sign-up").addEventListener("click",function(){
    document.querySelector("#again").innerHTML = `<div class="col-md-12">
    <form class="needs-validation" novalidate>
    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="validationTooltip01">First name</label>
        <input type="text" class="form-control" id="validationTooltip01" placeholder="Mark" required>
        <div class="valid-tooltip">
          Looks good!
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="validationTooltip02">Last name</label>
        <input type="text" class="form-control" id="validationTooltip02" placeholder="Otto" required>
        <div class="valid-tooltip">
          Looks good!
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="validationTooltip03">Email</label>
        <input type="text" class="form-control" id="validationTooltip03" placeholder="email@example.com" required>
        <div class="invalid-tooltip">
          Please provide a valid email.
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="validationTooltip04">Password</label>
        <input type="text" class="form-control" id="validationTooltip03" placeholder="min 8 figures required" required>
        <div class="invalid-tooltip">
          Please provide a valid password.
        </div>
      </div>
    </div>
    <div class="form-row">  
        <div class="col-md-3 mb-3">
            <label for="validationTooltip05">Sex</label>
            <input type="text" class="form-control" id="validationTooltip05" required>
            <div class="invalid-tooltip">
            Please provide a valid sex.
            </div>
        </div>  
    
        <div class="col-md-3 mb-3">
            <label for="validationTooltip04">Age</label>
            <input type="text" class="form-control" id="validationTooltip03" required>
            <div class="invalid-tooltip">
            Please provide a valid age.
            </div>
        </div>
        <div class="col-md-3 mb-3">
            <label for="validationTooltip04">Weight</label>
            <input type="text" class="form-control" id="validationTooltip03" required>
            <div class="invalid-tooltip">
            Please provide a valid age.
            </div>
        </div>
        <div class="col-md-3 mb-3">
            <label for="validationTooltip04">Height</label>
            <input type="text" class="form-control" id="validationTooltip03" required>
            <div class="invalid-tooltip">
            Please provide a valid age.
            </div>
        </div>
      
    </div>
    <button class="btn btn-primary" type="submit">Submit form</button>
  </form>
  </div>`
});