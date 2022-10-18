$(() => {
  //추가
  $("#save").on("click", () => {
    const job = $("#job").val();
    if (job.length === 0) return;
    $.ajax({
      url: "/api/todos",
      type: "post",
      data: { job: job },
    })
      .done((data) => {
        alert(data.result);
        location.reload();
      })
      .fail((xhr, status, error) => {});
  });

  //삭제
  $(".delete-button").on("click", (event) => {
    const target = $(event.target);
    const id = target.attr("id");
    $.ajax({
      url: `/api/todos/${id}`,
      type: "delete",
    })
      .done((data) => {
        alert(data.result);
        location.reload();
      })
      .fail((xhr, status, error) => {});
  });
});
