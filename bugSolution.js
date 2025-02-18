function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values, return 0 or a default value as appropriate.
  } else {
    // Perform the main operations when a and b are not null 
    return a + b; 
  }
} 