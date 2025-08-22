

### **HTML Attributes (Simple Explanation)**  

**What are Attributes?**  
Attributes are **extra information** added to HTML tags to control their behavior or appearance.  

---

### **How to Use Attributes?**  
- Written inside the **opening tag**.  
- Syntax: `name="value"`  

**Example:**  
```html
<a href="https://google.com" target="_blank">Visit Google</a>
```  
Here:  
- `href` → Attribute name.  
- `"https://google.com"` → Attribute value.  
- `target="_blank"` → Another attribute (opens link in new tab).  

---

### **Common HTML Attributes**  

| Attribute  | Purpose | Example |
|------------|---------|---------|
| `id`       | Unique identifier | `<div id="header">` |
| `class`    | Groups elements for styling | `<p class="text-red">` |
| `src`      | Source (for images, scripts) | `<img src="logo.png">` |
| `alt`      | Alternate text (for images) | `<img alt="Company Logo">` |
| `style`    | Inline CSS styling | `<p style="color: red;">` |
| `disabled` | Disables a button/input | `<button disabled>Submit</button>` |

---

### **Boolean Attributes (True/False)**  
Some attributes don’t need a value—just adding them enables them:  
```html
<input type="checkbox" checked>  <!-- Checkbox is checked -->
<button disabled>Can't Click</button>  <!-- Button is disabled -->
```
