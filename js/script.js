document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input data
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Form validation
    if (weight <= 0 || height <= 0) {
        alert('Masukkan berat dan tinggi badan yang valid.');
        return;
    }

    // Calculating BMI 
    const bmi = weight / ((height / 100) ** 2);

    // BMI category and explanation
    let bmiCategory;
    let explanation;
    let recommendation;
    if (bmi < 18.5) {
        bmiCategory = 'Anda kekurangan berat badan';
        explanation = 'BMI kurang dari 18.5 menunjukkan berat badan Anda kurang dari yang seharusnya. Kekurangan berat badan dapat menyebabkan masalah kesehatan seperti kekurangan gizi, anemia, dan sistem kekebalan tubuh yang lemah.';
        recommendation = 'Anda harus meningkatkan asupan kalori dan berolahraga untuk menambah berat badan secara sehat. Konsumsi makanan yang kaya akan nutrisi seperti protein, lemak sehat, dan karbohidrat kompleks.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = 'Berat badan Anda normal';
        explanation = 'BMI antara 18.5 dan 24.9 menunjukkan bahwa berat badan Anda dalam kisaran yang sehat. Ini berarti Anda memiliki risiko lebih rendah untuk masalah kesehatan terkait berat badan.';
        recommendation = 'Pertahankan pola makan sehat dan rutin berolahraga untuk menjaga berat badan ideal Anda. Pastikan Anda mendapatkan cukup nutrisi dari berbagai jenis makanan dan menjaga gaya hidup aktif.';
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = 'Berat badan Anda berlebih';
        explanation = 'BMI antara 25 dan 29.9 menunjukkan bahwa berat badan Anda lebih dari yang seharusnya. Kelebihan berat badan dapat meningkatkan risiko penyakit seperti diabetes, hipertensi, dan penyakit jantung.';
        recommendation = 'Anda disarankan untuk mengatur pola makan dan meningkatkan aktivitas fisik untuk menurunkan berat badan. Cobalah mengurangi asupan kalori, makan lebih banyak sayuran dan buah-buahan, serta rutin berolahraga.';
    } else {
        bmiCategory = 'Anda termasuk obesitas';
        explanation = 'BMI 30 atau lebih menunjukkan bahwa Anda termasuk dalam kategori obesitas. Obesitas meningkatkan risiko berbagai masalah kesehatan serius seperti penyakit jantung, diabetes tipe 2, dan berbagai jenis kanker.';
        recommendation = 'Anda sangat dianjurkan untuk berkonsultasi dengan dokter atau ahli gizi untuk program penurunan berat badan yang tepat. Fokus pada perubahan gaya hidup yang berkelanjutan seperti pola makan sehat dan peningkatan aktivitas fisik.';
    }

    // Display BMI value, category, explanation, and recommendation
    document.getElementById('bmiValue').innerText = `${bmi.toFixed(1)}`;
    document.getElementById('bmiCategory').innerText = `${bmiCategory}`;
    document.getElementById('bmiExplanation').innerText = `${explanation}`;
    document.getElementById('bmiRecommendation').innerText = `${recommendation}`;

    // Show result section
    document.getElementById('recommendation').style.display = 'block';
    document.getElementById('result').style.display = 'block';
    document.getElementById('resultBtn').style.display = 'block';
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    alert('Fitur unduh belum tersedia.');
});

document.getElementById('consultBtn').addEventListener('click', function() {
    alert('Fitur konsultasi belum tersedia.');
});
