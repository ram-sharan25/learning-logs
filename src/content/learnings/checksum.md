---
title: "Checksum"
topic: "LeetCode"
date: 2025-09-23
tags: ["medium", "array"]
difficulty: "medium"
draft: false
---

<div class="org-content">

<div id="outline-container-org6f72e3b" class="outline-2">
<h2 id="org6f72e3b">Information</h2>
<div class="outline-text-2" id="text-org6f72e3b">
<ul class="org-ul">
<li>Name: [Checksum]</li>
<li>Link: [<a href="http://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/">http://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/</a>]</li>
<li>Difficulty: [Medium]</li>
<li>Date: <span class="timestamp-wrapper"><span class="timestamp">&lt;2025-09-23 Tue&gt;</span></span></li>
<li>Problem Type:Array</li>
</ul>
</div>
</div>
<div id="outline-container-org0b7e46f" class="outline-2">
<h2 id="org0b7e46f">Problem Decription</h2>
<div class="outline-text-2" id="text-org0b7e46f">
<p>
For a sorted array A and a number s, find whether there are two entries in A which sum up to s.
</p>
</div>
</div>
<div id="outline-container-org71dfec1" class="outline-2">
<h2 id="org71dfec1">Approach &amp; Code</h2>
<div class="outline-text-2" id="text-org71dfec1">
<ul class="org-ul">
<li>Array A is an sorted array.</li>
<li>Entries can be positive and nrgative integers.</li>
<li>Sum s to be sum of two entries from the array.</li>
<li>Same entry can be added twice to get the sum.</li>
</ul>
</div>
<div id="outline-container-orgf6f0aca" class="outline-3">
<h3 id="orgf6f0aca">Approach 1: Exhaustive Approach</h3>
<div class="outline-text-3" id="text-orgf6f0aca">
<pre class="example" id="orgfc35f28">
Checksum(A,s)
  //A is an sorted array of numbers.
  //s is the sum to be checked
  n = A.length
  for(i = 1 ; i &lt;= n; i++)
    for(j = i; j&lt;= n; j++)
      sum = A[i] + A[j]
      if(sum == s)
        return true
  return false

</pre>


<div class="org-src-container">
<pre class="src src-python"><span class="org-keyword">def</span> <span class="org-function-name">checksum</span>(A, s):
    <span class="org-doc">"""
    Checks if two entries in a sorted array A sum up to s.

    This is a literal translation of the provided pseudocode.
    Note: The original pseudocode uses 1-based indexing (i from 1 to n).
    Python uses 0-based indexing (0 to n-1), so the array access is A[i-1] and A[j-1].
    """</span>
    <span class="org-comment-delimiter"># </span><span class="org-comment">A is a sorted list of numbers.
</span>    <span class="org-comment-delimiter"># </span><span class="org-comment">s is the sum to be checked
</span>    <span class="org-variable-name">n</span> <span class="org-operator">=</span> <span class="org-builtin">len</span>(A)
    <span class="org-keyword">for</span> i <span class="org-keyword">in</span> <span class="org-builtin">range</span>(1, n <span class="org-operator">+</span> 1):
      <span class="org-keyword">for</span> j <span class="org-keyword">in</span> <span class="org-builtin">range</span>(i, n <span class="org-operator">+</span> 1):
        <span class="org-comment-delimiter"># </span><span class="org-comment">Adjust for Python's 0-based indexing
</span>        <span class="org-variable-name">current_sum</span> <span class="org-operator">=</span> A[i<span class="org-operator">-</span>1] <span class="org-operator">+</span> A[j<span class="org-operator">-</span>1]
        <span class="org-keyword">if</span> current_sum <span class="org-operator">==</span> s:
          <span class="org-keyword">return</span> <span class="org-constant">True</span>
    <span class="org-keyword">return</span> <span class="org-constant">False</span>
<span class="org-variable-name">my_array</span> <span class="org-operator">=</span> [1, 2, 4, 7, 8, 11]
<span class="org-variable-name">target_sum_1</span> <span class="org-operator">=</span> 10 <span class="org-comment-delimiter"># </span><span class="org-comment">(2 + 8)
</span><span class="org-variable-name">target_sum_2</span> <span class="org-operator">=</span> 15 <span class="org-comment-delimiter"># </span><span class="org-comment">(4 + 11)
</span><span class="org-builtin">print</span>(checksum(my_array,target_sum_1))
</pre>
</div>

<pre class="example">
True
</pre>
</div>

<div id="outline-container-org76173a8" class="outline-4">
<h4 id="org76173a8">Problem Complexity</h4>
<div class="outline-text-4" id="text-org76173a8">
<ul class="org-ul">
<li>Time Complexity: O(n<sup>2</sup>)
<ul class="org-ul">
<li>As there is nested loop to compare the sum.</li>
</ul></li>
<li>Space Complexity: O(1)</li>
</ul>
</div>
</div>

<div id="outline-container-orge82b17f" class="outline-4">
<h4 id="orge82b17f">Key Takeaway / Learning</h4>
</div>
</div>
<div id="outline-container-org8d9301d" class="outline-3">
<h3 id="org8d9301d">Approach 2: Iteratice Approach</h3>
<div class="outline-text-3" id="text-org8d9301d">
<ul class="org-ul">
<li>A better approach then the exhaustive approach utilizing the fact that the
array is sorted.</li>
</ul>
<pre class="example" id="org565d0a7">
Checksum(A,s)
  //A is an sorted array of numbers.
  //s is the sum to be checked
  right = A.length
  left = 1
  while (left &lt;= right):
      sum = A[left] + A[right]
      if(sum == s):
        return true
      elseif(sum &lt; s):
        left ++
      else
        right --
  return false
</pre>

<div class="org-src-container">
<pre class="src src-python"><span class="org-keyword">def</span> <span class="org-function-name">checksum</span>(A, s):
  <span class="org-comment-delimiter"># </span><span class="org-comment">A is a sorted list of numbers.
</span>  <span class="org-comment-delimiter"># </span><span class="org-comment">s is the sum to be checked
</span>  <span class="org-variable-name">right</span> <span class="org-operator">=</span> <span class="org-builtin">len</span>(A)<span class="org-operator">-</span>1
  <span class="org-variable-name">left</span> <span class="org-operator">=</span> 0
  <span class="org-builtin">print</span>(left,right, A[left],A[right])

  <span class="org-keyword">while</span> left <span class="org-operator">&lt;=</span> right:
    <span class="org-comment-delimiter"># </span><span class="org-comment">This line will cause an IndexError because 'right' is out of bounds.
</span>    <span class="org-builtin">print</span>( A[left] , A[right])
    <span class="org-variable-name">current_sum</span> <span class="org-operator">=</span> A[left] <span class="org-operator">+</span> A[right]

    <span class="org-keyword">if</span> current_sum <span class="org-operator">==</span> s:
      <span class="org-keyword">return</span> <span class="org-constant">True</span>
    <span class="org-keyword">elif</span> current_sum <span class="org-operator">&lt;</span> s:
      <span class="org-variable-name">left</span> <span class="org-operator">+=</span> 1
    <span class="org-keyword">else</span>:
      <span class="org-comment-delimiter"># </span><span class="org-comment">This logic is also from the pseudocode.
</span>      <span class="org-variable-name">right</span> <span class="org-operator">-=</span> 1

  <span class="org-keyword">return</span> <span class="org-constant">False</span>

<span class="org-comment-delimiter"># </span><span class="org-comment">--- Example Usage ---
</span><span class="org-comment-delimiter"># </span><span class="org-comment">Note: Running this code will raise an IndexError immediately.
</span><span class="org-variable-name">my_array</span> <span class="org-operator">=</span> [1, 2, 4, 7, 8, 11]
<span class="org-variable-name">target_sum</span> <span class="org-operator">=</span> 16

<span class="org-keyword">try</span>:
    <span class="org-builtin">print</span>(checksum(my_array, target_sum))
<span class="org-keyword">except</span> <span class="org-type">IndexError</span> <span class="org-keyword">as</span> e:
    <span class="org-builtin">print</span>(f<span class="org-string">"Code failed as expected with an error: </span>{e}<span class="org-string">"</span>)
</pre>
</div>

<pre class="example">
0 5 1 11
1 11
2 11
4 11
7 11
7 8
8 8
True
</pre>
</div>
<div id="outline-container-org9fba398" class="outline-4">
<h4 id="org9fba398">Problem Complexity</h4>
<div class="outline-text-4" id="text-org9fba398">
<ul class="org-ul">
<li>Time Complexity: O(n)
<ul class="org-ul">
<li>As we only pass through a element once for the problem completion.</li>
</ul></li>
<li>Space Complexity: O(1)</li>
</ul>
</div>
</div>

<div id="outline-container-orgb66c93a" class="outline-4">
<h4 id="orgb66c93a">Key Takeaway / Learning</h4>
<div class="outline-text-4" id="text-orgb66c93a">
<ul class="org-ul">
<li>As the array is sorted, the arrangement of number will be such that the sum
will be most likely from the left and right of the center.</li>
<li>If the current sum is less then we must move towards the larger number that is
move the left index towards the center</li>
<li>Id the current sum is larger then we need smaller number which is the number
left to the current right index, so decrease the right index towards the mid.</li>
</ul>
</div>
</div>
</div>
<div id="outline-container-org8491f95" class="outline-3">
<h3 id="org8491f95">Approach 3: Recursive Approach</h3>
<div class="outline-text-3" id="text-org8491f95">
<p>
The iterative approach above gives an insight of the  key operation for each step.
</p>
<ul class="org-ul">
<li>We need the whole array,final sum, and two index to check the sum for it.</li>
<li>If we found the sum then the termination step is reached.</li>
<li>If not then we can use the current index to call for the next iteration with
new fresh index to look for.</li>
</ul>
<pre class="example" id="org9ed7e0a">
Checksum(A,s,left,right)
  //A is an sorted array of numbers.
  //s is the sum to be checked
  //left is the value of left index
  //right is the value of right index
  if(left &gt; right):
    return false
  sum = A[left] + A[right]
  if(sum == s):
    return true
  elseif(sum &lt; s):
    return Checksum(A,s,left++,right)
  else
    return Checksum(A,s,left,right--)
Checksum(A,s,1,A.length)
</pre>

<div class="org-src-container">
<pre class="src src-python"><span class="org-keyword">def</span> <span class="org-function-name">checksum</span>(A,s,left,right):
  <span class="org-comment-delimiter">#</span><span class="org-comment">A is an sorted array of numbers.
</span>  <span class="org-comment-delimiter">#</span><span class="org-comment">s is the sum to be checked
</span>  <span class="org-comment-delimiter">#</span><span class="org-comment">left is the value of left index
</span>  <span class="org-comment-delimiter">#</span><span class="org-comment">right is the value of right index
</span>  <span class="org-keyword">if</span>(left <span class="org-operator">&gt;</span> right):
    <span class="org-keyword">return</span> <span class="org-constant">False</span>
  <span class="org-variable-name">val</span> <span class="org-operator">=</span> A[left] <span class="org-operator">+</span> A[right]
  <span class="org-builtin">print</span>(left,right,A[left] ,A[right],val)
  <span class="org-keyword">if</span>(val <span class="org-operator">==</span> s):
    <span class="org-keyword">return</span> <span class="org-constant">True</span>
  <span class="org-keyword">elif</span>(val <span class="org-operator">&lt;</span> s):
    <span class="org-keyword">return</span> checksum(A,s,left<span class="org-operator">+</span>1,right)
  <span class="org-keyword">else</span>:
    <span class="org-keyword">return</span> checksum(A,s,left,right<span class="org-operator">-</span>1)
<span class="org-variable-name">my_array</span> <span class="org-operator">=</span> [1, 2, 4, 7, 8, 11]
<span class="org-variable-name">target_sum</span> <span class="org-operator">=</span> 16

<span class="org-keyword">try</span>:
    <span class="org-builtin">print</span>(checksum(my_array, target_sum,0,<span class="org-builtin">len</span>(my_array)<span class="org-operator">-</span>1))
<span class="org-keyword">except</span> <span class="org-type">IndexError</span> <span class="org-keyword">as</span> e:
    <span class="org-builtin">print</span>(f<span class="org-string">"Code failed as expected with an error: </span>{e}<span class="org-string">"</span>)

</pre>
</div>

<pre class="example">
0 5 1 11 12
1 5 2 11 13
2 5 4 11 15
3 5 7 11 18
3 4 7 8 15
4 4 8 8 16
True
</pre>
</div>
<div id="outline-container-org37b5c80" class="outline-4">
<h4 id="org37b5c80">Problem Complexity</h4>
<div class="outline-text-4" id="text-org37b5c80">
<ul class="org-ul">
<li>Time Complexity: O(n)</li>
</ul>


<div id="orge0265f0" class="figure">
<p><img src="../../../public/images/learnings/checksum/time_complexity_two_sum_II_recursive.png" alt="time_complexity_two_sum_II_recursive.png" width="800px" />
</p>
</div>
<ul class="org-ul">
<li>Space Complexity: O(1)</li>
</ul>
</div>
</div>

<div id="outline-container-org79ced8b" class="outline-4">
<h4 id="org79ced8b">Key Takeaway / Learning</h4>
</div>
</div>
</div>

</div>
