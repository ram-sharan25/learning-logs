---
title: "DecodeWays-L91"
topic: "LeetCode"
date: 2025-05-10
tags: ["medium"]
difficulty: "medium"
draft: false
---

<div class="org-content">

<div id="outline-container-orgdda41d2" class="outline-2">
<h2 id="orgdda41d2">Information</h2>
<div class="outline-text-2" id="text-orgdda41d2">
<ul class="org-ul">
<li>Link: [<a href="https://neetcode.io/problems/decode-ways">https://neetcode.io/problems/decode-ways</a>]</li>
<li>Difficulty: [Medium]</li>
<li>Date: <span class="timestamp-wrapper"><span class="timestamp">&lt;2025-05-10 Sat&gt;</span></span></li>
<li>Solution:<a href="https://youtu.be/6aEyTjOwlJU">https://youtu.be/6aEyTjOwlJU</a></li>
</ul>
</div>
</div>
<div id="outline-container-orge2c6a2a" class="outline-2">
<h2 id="orge2c6a2a">Approach &amp; Code</h2>
<div class="outline-text-2" id="text-orge2c6a2a">
</div>
<div id="outline-container-org28daf79" class="outline-3">
<h3 id="org28daf79">Approach 1: Recursive Brute Force using tree</h3>
<div class="outline-text-3" id="text-org28daf79">
<ul class="org-ul">
<li>This approach is a recursive brute force approach which is based on the tree
based on the tree based approach.</li>
<li>For every character it can either behave as single or two digits
within some contraints.</li>
<li>Also this is a recursive approach where each it process the whole of
string by taking each char once in combination of one or two digits.</li>
<li>The two char combination is checked for constraints of :
<ul class="org-ul">
<li>no 0 as its first character .</li>
<li>1 place character should be less than 7 if the 0<sup>th</sup> character
is 2. ( This is to check characters from 1 to 26)</li>
</ul></li>
<li>If the no of character is only one then it has reached to the end of
the string with taking each characters under consideration.
<ul class="org-ul">
<li>So one, 1 is returned for that branch of tree.</li>
<li>So for each complete branch only one is added.</li>
</ul></li>
</ul>
<div class="org-src-container">
<pre class="src src-python"><span class="org-keyword">class</span> <span class="org-type">Solution</span>:
    <span class="org-keyword">def</span> <span class="org-function-name">numDecodings</span>(<span class="org-keyword">self</span>, s: <span class="org-builtin">str</span>) <span class="org-operator">-&gt;</span> <span class="org-builtin">int</span>:
        <span class="org-keyword">def</span> <span class="org-function-name">dfs</span>(i):
            <span class="org-keyword">if</span> i<span class="org-operator">==</span><span class="org-builtin">len</span>(s):
                <span class="org-keyword">return</span> 1
            <span class="org-keyword">if</span> s[0] <span class="org-operator">==</span><span class="org-string">'0'</span>:
                <span class="org-keyword">return</span> 0
            <span class="org-variable-name">res</span> <span class="org-operator">=</span> dfs(i<span class="org-operator">+</span>1
            <span class="org-keyword">if</span>(i<span class="org-operator">&lt;</span><span class="org-builtin">len</span>(s)<span class="org-operator">-</span>1):
                <span class="org-keyword">if</span>(s[i]<span class="org-operator">==</span><span class="org-string">'1'</span> <span class="org-keyword">or</span> s[i]<span class="org-operator">==</span><span class="org-string">'2'</span> <span class="org-keyword">and</span> s[i<span class="org-operator">+</span>1]<span class="org-operator">&lt;</span><span class="org-string">'7'</span>):
                    res<span class="org-operator">+=</span>dfs(i<span class="org-operator">+</span>2)
            <span class="org-keyword">return</span> res
        <span class="org-keyword">return</span> dfs(0)

n <span class="org-operator">=</span> <span class="org-string">"12345"</span>

<span class="org-builtin">eval</span> <span class="org-operator">=</span> Solution()
out1 <span class="org-operator">=</span> <span class="org-builtin">eval</span>.numDecodings(n)
<span class="org-builtin">print</span>(out1)
</pre>
</div>
</div>

<div id="outline-container-org0620d66" class="outline-4">
<h4 id="org0620d66">Problem Complexity:</h4>
<div class="outline-text-4" id="text-org0620d66">
<ul class="org-ul">
<li>Time Complexity: O(2<sup>n</sup>) as it branches out on every character and
it can have 2 branches on every char. And it needs to create 2<sup>n</sup>
branches and run over all the combination to complete the problem</li>
<li>Space Complexity: O(n)</li>
</ul>
</div>
</div>
<div id="outline-container-org5eb782b" class="outline-4">
<h4 id="org5eb782b">Key Takeaway / Learning:</h4>
<div class="outline-text-4" id="text-org5eb782b">
<ul class="org-ul">
<li>Recursion</li>
<li>Tree Approach (need to develop more intuition)</li>
</ul>
</div>
</div>
</div>

<div id="outline-container-org8cbc49d" class="outline-3">
<h3 id="org8cbc49d">Approach 2: Dynamic Approach:</h3>
<div class="outline-text-3" id="text-org8cbc49d">
<ul class="org-ul">
<li>This is using the Dynamic Programming Approach</li>
<li>This creates a memory to save the already calcualted value so that
recalculation is avoided .
<ul class="org-ul">
<li>This is done by keeping a dictionalry named dp.</li>
</ul></li>
<li>First the value of dp is initialized by the len(s) value which is
not a normal case as len(s) char doesnot exits in the string.</li>
<li>Then in the tree (dfs) it will look for the value for i in dp, if it
is already present then no need to calculate it.</li>
<li>Then if it is not present then check for if it is 0, as it is the
invalid case .</li>
<li>If both the conditions passes then it will look for case with single
digit.</li>
<li>Also after checking for the double digit and its contraints(no first
char to be 0 and no second char to be grater than 6), it calculates
for 2 digits too.</li>
<li>And all the results are accumulated in res variable.</li>
<li>The program starts from 0<sup>th</sup> digit.</li>
</ul>
<div class="org-src-container">
<pre class="src src-python"><span class="org-keyword">class</span> <span class="org-type">Solution</span>:
    <span class="org-keyword">def</span> <span class="org-function-name">numDecodings</span>(<span class="org-keyword">self</span>, s: <span class="org-builtin">str</span>) <span class="org-operator">-&gt;</span> <span class="org-builtin">int</span>:
      <span class="org-variable-name">dp</span> <span class="org-operator">=</span> {<span class="org-builtin">len</span>(s):1}
      <span class="org-keyword">def</span> <span class="org-function-name">dfs</span>(i):
          <span class="org-comment-delimiter"># </span><span class="org-comment">print("temp -&gt;",i,":",dp)
</span>
          <span class="org-keyword">if</span>(i <span class="org-keyword">in</span> dp):
              <span class="org-builtin">print</span>(<span class="org-string">"dp-&gt;"</span>,i,<span class="org-string">"-&gt;"</span>,dp[i])
              <span class="org-keyword">return</span> dp[i]
          <span class="org-keyword">if</span> (s[i]<span class="org-operator">==</span><span class="org-string">"0"</span>):
              <span class="org-keyword">return</span> 0
          <span class="org-builtin">print</span>(<span class="org-string">"s["</span>,i,<span class="org-string">"]-&gt;"</span>,s[i])
          <span class="org-variable-name">res</span> <span class="org-operator">=</span> dfs(i<span class="org-operator">+</span>1)
          <span class="org-keyword">if</span>(i<span class="org-operator">+</span>1<span class="org-operator">&lt;</span><span class="org-builtin">len</span>(s)) <span class="org-keyword">and</span>(s[i]<span class="org-operator">==</span><span class="org-string">"1"</span> <span class="org-keyword">or</span> (s[i]<span class="org-operator">==</span><span class="org-string">"2"</span> <span class="org-keyword">and</span> s[i<span class="org-operator">+</span>1] <span class="org-keyword">in</span> <span class="org-string">"0123456"</span>)):
              <span class="org-builtin">print</span>(<span class="org-string">"Here-&gt;"</span>,s[i],<span class="org-string">","</span>,s[i<span class="org-operator">+</span>1])
              <span class="org-variable-name">res</span> <span class="org-operator">+=</span> dfs(i<span class="org-operator">+</span>2)
          <span class="org-variable-name">dp</span>[i] <span class="org-operator">=</span> res
          <span class="org-builtin">print</span>(<span class="org-string">"temp -&gt;"</span>,i,<span class="org-string">":"</span>,dp)
          <span class="org-keyword">return</span> res

      <span class="org-keyword">return</span> dfs(0)
<span class="org-variable-name">n</span> <span class="org-operator">=</span> <span class="org-string">"12345234"</span>
<span class="org-builtin">eval</span> <span class="org-operator">=</span> Solution();
<span class="org-variable-name">out1</span> <span class="org-operator">=</span> <span class="org-builtin">eval</span>.numDecodings(n)
<span class="org-builtin">print</span>(<span class="org-string">"Result"</span>,out1)
</pre>
</div>

<pre class="example" id="org968de34">
s[ 0 ]-&gt; 1
s[ 1 ]-&gt; 2
s[ 2 ]-&gt; 3
s[ 3 ]-&gt; 4
s[ 4 ]-&gt; 5
s[ 5 ]-&gt; 2
s[ 6 ]-&gt; 3
s[ 7 ]-&gt; 4
dp-&gt; 8 -&gt; 1
temp -&gt; 7 : {8: 1, 7: 1}
temp -&gt; 6 : {8: 1, 7: 1, 6: 1}
Here-&gt; 2 , 3
dp-&gt; 7 -&gt; 1
temp -&gt; 5 : {8: 1, 7: 1, 6: 1, 5: 2}
temp -&gt; 4 : {8: 1, 7: 1, 6: 1, 5: 2, 4: 2}
temp -&gt; 3 : {8: 1, 7: 1, 6: 1, 5: 2, 4: 2, 3: 2}
temp -&gt; 2 : {8: 1, 7: 1, 6: 1, 5: 2, 4: 2, 3: 2, 2: 2}
Here-&gt; 2 , 3
dp-&gt; 3 -&gt; 2
temp -&gt; 1 : {8: 1, 7: 1, 6: 1, 5: 2, 4: 2, 3: 2, 2: 2, 1: 4}
Here-&gt; 1 , 2
dp-&gt; 2 -&gt; 2
temp -&gt; 0 : {8: 1, 7: 1, 6: 1, 5: 2, 4: 2, 3: 2, 2: 2, 1: 4, 0: 6}
Result 6
</pre>
</div>
<div id="outline-container-orgfe8a533" class="outline-4">
<h4 id="orgfe8a533">Problem Complexity:</h4>
<div class="outline-text-4" id="text-orgfe8a533">
<ul class="org-ul">
<li>Time Complexity: O(n) as it will pass through the list once and uses
the calculation done in previous steps.</li>
<li>Space Complexity: O(n) as it will store the key value for all the
indexes of the string+1.</li>
</ul>
</div>
</div>
<div id="outline-container-org8ef6733" class="outline-4">
<h4 id="org8ef6733">Key TakeWay / Learning:</h4>
<div class="outline-text-4" id="text-org8ef6733">
<ul class="org-ul">
<li>Dynamic Programming</li>
<li>Memoization</li>
<li>Recursion</li>
</ul>
</div>
</div>
</div>
<div id="outline-container-orgbcfe73b" class="outline-3">
<h3 id="orgbcfe73b">Approach 3: Dynamic Programming (Bottom Up Approach):</h3>
<div class="outline-text-3" id="text-orgbcfe73b">
<ul class="org-ul">
<li>This is a variant of dynamic programming a bit different from the
above implementation from the second approach.</li>
<li>Here it starts from the last entry and get to the first char.</li>
</ul>
<div class="org-src-container">
<pre class="src src-python"><span class="org-keyword">class</span> <span class="org-type">Solution</span>:
    <span class="org-keyword">def</span> <span class="org-function-name">numDecodings</span>(<span class="org-keyword">self</span>, s: <span class="org-builtin">str</span>) <span class="org-operator">-&gt;</span> <span class="org-builtin">int</span>:
        <span class="org-variable-name">dp</span> <span class="org-operator">=</span> {<span class="org-builtin">len</span>(s):1}

        <span class="org-keyword">for</span> i <span class="org-keyword">in</span> <span class="org-builtin">range</span>(<span class="org-builtin">len</span>(s)<span class="org-operator">-</span>1, <span class="org-operator">-</span>1, <span class="org-operator">-</span>1):

            <span class="org-keyword">if</span>(s[i]<span class="org-operator">==</span><span class="org-string">'0'</span>):
                <span class="org-variable-name">dp</span>[i]<span class="org-operator">=</span> 0
            <span class="org-keyword">else</span>:
                <span class="org-variable-name">dp</span>[i] <span class="org-operator">=</span> dp[i<span class="org-operator">+</span>1]
            <span class="org-keyword">if</span>((i<span class="org-operator">+</span>1)<span class="org-operator">&lt;</span><span class="org-builtin">len</span>(s) <span class="org-keyword">and</span> (s[i] <span class="org-operator">==</span> <span class="org-string">'1'</span> <span class="org-keyword">or</span>
            (s[i]<span class="org-operator">==</span><span class="org-string">'2'</span> <span class="org-keyword">and</span> s[i<span class="org-operator">+</span>1] <span class="org-keyword">in</span> <span class="org-string">'0123456'</span>))):
                <span class="org-variable-name">dp</span>[i] <span class="org-operator">+=</span> dp[i<span class="org-operator">+</span>2]
        <span class="org-keyword">return</span> dp[0]

<span class="org-variable-name">n</span><span class="org-operator">=</span><span class="org-string">'1222'</span>
<span class="org-builtin">eval</span> <span class="org-operator">=</span> Solution()
<span class="org-variable-name">out1</span> <span class="org-operator">=</span> <span class="org-builtin">eval</span>.numDecodings(n)
<span class="org-builtin">print</span>(out1)
</pre>
</div>

<pre class="example">
5
</pre>
</div>

<div id="outline-container-org9a29fbc" class="outline-4">
<h4 id="org9a29fbc">Problem Complexity:</h4>
<div class="outline-text-4" id="text-org9a29fbc">
<ul class="org-ul">
<li>Time : O(n)</li>
<li>Space: O(n)</li>
</ul>
</div>
</div>
<div id="outline-container-orgba5caee" class="outline-4">
<h4 id="orgba5caee">Key Takeway:</h4>
<div class="outline-text-4" id="text-orgba5caee">
<ul class="org-ul">
<li>Dynamic Programming</li>
<li>Bottom Up Approach</li>
</ul>
</div>
</div>
</div>
</div>

</div>
