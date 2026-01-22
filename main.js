// LOADER
window.addEventListener("load",()=>{
  document.getElementById("loader").classList.add("hide");

  // HERO MEDIA STAGGER
  document.querySelectorAll(".media-item").forEach((item,i)=>{
    setTimeout(()=>item.classList.add("show"), i*350);
  });
});

// SCROLL ANIMATION
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add("show");
  });
},{threshold:.2});
document.querySelectorAll(".fade-up").forEach(el=>obs.observe(el));

// VIDEO MODAL
function openVideo(src){
  const m=document.getElementById("videoModal");
  const v=document.getElementById("modalVideo");
  v.src=src;m.classList.add("show");v.play();
}
function closeVideo(){
  const m=document.getElementById("videoModal");
  const v=document.getElementById("modalVideo");
  v.pause();v.src="";m.classList.remove("show");
}
