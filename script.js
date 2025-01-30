// الحصول على عناصر DOM
const ratingSection = document.querySelector('.first-div');
const thankYouSection = document.querySelector('.second-div');
const rateButtons = document.querySelectorAll('.numbers span');
const submitButton = document.querySelector('.submit');
const selectedRateSpan = document.querySelector('.number-selected');

let selectedRate = null;

// التعامل مع اختيار رقم التقييم
rateButtons.forEach(button => {
  button.addEventListener('click', () => {
    // إزالة أي اختيار سابق
    rateButtons.forEach(btn => btn.classList.remove('checked'));
    // تمييز الرقم المختار
    button.classList.add('checked');
    selectedRate = button.innerText;
  });
});

// التعامل مع زر الإرسال
submitButton.addEventListener('click', () => {
  if (selectedRate) {
    // عرض الرسالة بعد الإخفاء
    selectedRateSpan.textContent = selectedRate;
    ratingSection.classList.add('hidden');
    thankYouSection.classList.remove('hidden');
  } 
});
