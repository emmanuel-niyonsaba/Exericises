function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
  return "No needle found";
}

console.log(findNeedle(["hay", "junk", "needle", "moreJunk"]));
