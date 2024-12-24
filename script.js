function endorse(skillId) {
    const countSpan = document.getElementById(skillId);
    let count = parseInt(countSpan.textContent);
    count++;
    countSpan.textContent = count;
}
