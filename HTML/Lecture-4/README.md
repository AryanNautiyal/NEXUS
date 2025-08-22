
# 🗂️ Why Are Files Stored in Binary Form?

Files are stored in **binary form** because computers understand only binary data.

---

# 📄 How Are HTML Files Read?

When we receive an HTML file, it is in **binary format**. To convert this binary data into readable English characters (or any other language), we use **character encoding** like `UTF-8`.

---

# 🔤 ASCII Encoding: The Old Standard

Previously, **ASCII encoding** was used, where each character (e.g., `'A' = 65`) is represented by **8 bits (1 byte)**.  
However, ASCII can only represent **256 (2⁸) unique characters**, which is insufficient for all the characters used worldwide (such as those in Hindi, Chinese, emojis, etc.).

---

# 🌐 UTF-8: The Modern Solution

**UTF-8** solves this limitation by using a **variable-length encoding scheme**. It uses **1 to 4 bytes per character**:

- **ASCII characters:** 1 byte
- **Latin characters:** 2 bytes
- **Characters from languages like Hindi or Chinese:** 3 bytes
- **Emojis and some other symbols:** 4 bytes

---

# ✨ Why UTF-8 (Unicode Transformation Format-8) ?

This makes **UTF-8** flexible and capable of representing a vast range of characters from different languages and symbol sets.



Now, you might wonder: how does the computer distinguish between, for example, three English characters (24 bits = 3 bytes = 3 × 1 byte) and a single Hindi character (24 bits = 3 bytes)?

This is handled by the way UTF-8 encodes characters:

- If the **first bit is `0`**, it's an ASCII character and only 8 bits (1 byte) are read.
- If the **first bits are `110`**, it's a character that needs 16 bits (2 bytes), typically for Latin-based characters beyond standard ASCII.
- If the **first bits are `1110`**, it's a character that needs 24 bits (3 bytes), such as many Hindi or Chinese characters.
- If the **first bits are `11110`**, it's a character that needs 32 bits (4 bytes), used for emojis and some rare symbols.

This system allows UTF-8 to efficiently encode a wide variety of characters and makes it possible to tell how many bytes to read for each character just by looking at the first few bits.



# 🖼️ How Are Images Stored on a Computer?

Images are ultimately stored in **binary form**, just like any other file. But how does a colourful image get converted into binary data?

## 📦 Pixels: The Building Blocks

An image is made up of tiny units called **pixels**, arranged in rows and columns.  
- The **width** and **height** of an image (in pixels) determine its total number of pixels:  
    **Total Pixels = Width × Height**

## 🎨 Storing Colour: The RGB Model

Each pixel can display a unique colour. To represent colours, we use the **RGB (Red, Green, Blue)** colour model:
- **Red:** 0 to 255
- **Green:** 0 to 255
- **Blue:** 0 to 255

By combining different values of red, green, and blue, we can create millions of colours.

## 💾 How Much Data Per Pixel?

Each colour channel (R, G, B) requires **8 bits** { as 0 to 255 = 256 so 256 can be represented in 8 bits as 2^8 = 256 } (1 byte), so:
- **Total per pixel:** 8 bits (Red) + 8 bits (Green) + 8 bits (Blue) = **24 bits** = **3 bytes**

## 🧮 Example: Calculating Image Size

Suppose you have an image that is **100 × 100 pixels**:
- **Total pixels:** 100 × 100 = **10,000 pixels**
- **Total memory required:** 10,000 pixels × 3 bytes = **30,000 bytes = 30 KB**

So, a 100×100 pixel image in standard RGB format will take up about **30 KB** of storage.



## 🔍 Why Are Some Photos Clear While Others Are Blurry?

The clarity of an image depends on both its resolution and **colour depth** (the number of bits used to represent each colour channel).

- In standard RGB, each channel (Red, Green, Blue) uses **8 bits** (total **24 bits per pixel**), allowing for **16,777,216 (2²⁴)** possible colours.
- If we increase the colour depth to **10 bits per channel** (total **30 bits per pixel**), we can represent **over 1 billion (2³⁰)** colours. This allows for much finer colour gradations and smoother transitions, resulting in clearer, more detailed images.
- Professional and high-quality images often use **16 bits per channel** (total **48 bits per pixel**), enabling even more precise colour representation. This means even the smallest details and subtle colour differences are preserved.

**In summary:**  
Higher colour depth = more colours = greater image clarity and detail!

**(in my language)**

Why some photos are clear and some photos are blurr?

if RGB is represented in 30 bits (as RGB so should be divided by 3 so that equally divided between 3) i.e. 10 bits to Red, 10 bits to Green and 10 bits to Blue 

so we can go in-depth detail for colour as in above case we can only represent 2^24 different colour whereas in this we can represent 2^30 different colours due to this we get more image clarity 

so in clear images they use 48 bits one where 16 bits are given to each Red, Green and Blue
So in this even minute detail  is noticed 




**Note**

The main reason why UTF-8 is such a hit as mostly websites are made in english language so by giving minimum bits (8 bits or 1 byte) to english language it helps in keeping the memory consumption less.


### **1. What is a Viewport in HTML?**  
The **viewport** is the visible area of a webpage on a user’s device (like a phone, tablet, or desktop). In HTML, the viewport meta tag controls how the page scales and displays on different screen sizes.  

#### **Example (Standard Boilerplate Viewport Tag):**  
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```  
- **`width=device-width`**: Makes the page match the screen’s width.  
- **`initial-scale=1.0`**: Sets the default zoom level to 100%.  

**Why It Matters:**  
Without this tag, mobile devices might show a tiny, zoomed-out version of your desktop layout, forcing users to pinch-to-zoom.  

---

### **2. What is Boilerplate Code?**  
**Boilerplate** refers to **reusable, standardized code** that’s included in most projects to save time. It’s the "foundation" you start with before adding custom logic.  

#### **Example: HTML5 Boilerplate**  
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- Your content here -->
</body>
</html>
```  
This snippet contains essential tags every HTML file needs.  

---

### **3. Why is it Called "Boilerplate"?**  
The term comes from **old printing presses**.  
- **Historical Meaning:**  
  - In the 19th century, "boilerplate" referred to pre-made steel plates used for printing repetitive text (like legal disclaimers).  
- **Programming Adaptation:**  
  - Just like those plates saved printers time, boilerplate code saves developers from rewriting the same structure repeatedly.  

---

### **Key Takeaways**  
1. **Viewport Meta Tag**: Ensures proper scaling on mobile devices.  
2. **Boilerplate**: Standard starter code (like `<html>`, `<head>`, `<body>`).  
3. **Name Origin**: Borrowed from printing’s pre-made steel plates.  

---

### **Fun Fact**  
The HTML5 Boilerplate project ([html5boilerplate.com](https://html5boilerplate.com/)) popularized the term in web dev!  


**Note:** In 24 bit RGB range is 0 to 255 but in 48 bit range is 0 to 65535 