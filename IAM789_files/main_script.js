var spinloop = 0;
var spinremaining = 6;
$(".btn-spin").click(function () {
  spinloop++;
  spinremaining--;
  $this = $(this);
  $this.prop("disabled", true);
  $this.css("display", "none");
  $(".spinremaining").html(spinremaining);
  $(".spin-error").removeClass("active");
  $(".spinner-col").addClass("spinned-" + spinloop);
  $(".spinner-col").css("opacity", "0.80");
  setTimeout(function () {
    $(".spinner-col1").css("opacity", "1");
  }, 3000);
  setTimeout(function () {
    $(".spinner-col2").css("opacity", "1");
  }, 4000);
  setTimeout(function () {
    if (spinloop < 3) {
      $this.prop("disabled", false);
      $this.css("display", "initial");
      $(".spin-error").addClass("active");
    }
    $(".spinner-col3").css("opacity", "1");
    showMessage(spinloop);
  }, 5600);
});

function showMessage(spinloop) {
  if (spinloop < 3) {
  }
  if (spinloop == 3) {
    $(".spin-modal-backdrop").addClass("open").css("display", "block");
    $("body").addClass("modal-open").css("overflow", "hidden");
    $(".spin-modal").addClass("open");
    $(".spin-modal-backdrop").animate(
      {
        opacity: 1,
      },
      1000,
      function () {}
    );
    $(".btn-spin").removeClass("active");
  }
}
