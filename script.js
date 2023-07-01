const inputText = document.querySelector("#inputText");
const branchName = document.querySelector("#branchName");
const copyButton = document.querySelector("#copyButton");

function convertToBranchName(input) {
    // Trim leading and trailing whitespace and non-alphanumeric characters
    let trimmedText = input.trim().replace(/^[^a-z0-9]+|[^a-z0-9]+$/gi, "");

    // Convert to lowercase
    let lowercaseText = trimmedText.toLowerCase();

    // Replace whitespace and non-alphanumeric characters with a dash
    let convertedName = lowercaseText.replace(/[^a-z0-9]+/g, "-");

    return convertedName;
}

inputText.addEventListener("input", function () {
    const inputValue = inputText.value;
    const convertedValue = convertToBranchName(inputValue);
    branchName.value = convertedValue;
});

copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText(branchName.value);
});
