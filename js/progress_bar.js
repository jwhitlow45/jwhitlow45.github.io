function calculateProgress() {
  start_date = new Date(2017, 9, 1);
  end_date = new Date(2024, 6, 1);
  cur_date = new Date();
  return (cur_date - start_date) / (end_date - start_date);
}

function setProgress() {
  const progress_bar = document.getElementById("progress-education-bar");
  const progress_bar_text = document.getElementById("progress-education-text");
  progress = calculateProgress();
  progress_bar.value = progress;
  progress_bar_text.innerText = "M.S. Computer Science: " + (progress * 100).toFixed(2) + "%";
}
