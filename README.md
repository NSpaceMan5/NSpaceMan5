### ML Infrastructure & Data Engineering

Building differentiable pipelines for **procedural data augmentation**.<br>
Mathematical transforms · Physics-based distortion · Deterministic ETL · PyTorch · Reproducible ML

<br>

<a href="https://github.com/NSpaceMan5/math-render-pipeline">
  <img src="https://img.shields.io/badge/🧮_math--render--pipeline-0a1410?style=for-the-badge&logo=github&logoColor=e8e0d5" alt="Math Render Pipeline"/>
</a>
<a href="https://github.com/VynJustHumant/distortion-library">
  <img src="https://img.shields.io/badge/🦴_distortion--library-0a1410?style=for-the-badge&logo=github&logoColor=e8e0d5" alt="Distortion Library"/>
</a>
<a href="https://github.com/VynJustHumant/math-aug">
  <img src="https://img.shields.io/badge/🌿_math--aug-0a1410?style=for-the-badge&logo=github&logoColor=e8e0d5" alt="Math Aug"/>
</a>
<a href="https://www.upwork.com/freelancers/YOUR_ID">
  <img src="https://img.shields.io/badge/Upwork-14a800?style=for-the-badge&logo=upwork&logoColor=white" alt="Upwork"/>
</a>

</div>

---

## 🧮 What I Build

**Production-grade pipelines where math, ML, and data engineering meet.**<br>
Deterministic rendering · Physics-based distortion · Streaming + batch ETL · Tested.

| Project | Description | Stack |
|---|---|---|
| [math-render-pipeline](https://github.com/NSpaceMan5/math-render-pipeline) | Deterministic math → PNG + structured metadata. Batch + Kafka streaming, Airflow, dbt, Grafana. Live demo on Streamlit. | NumPy, Airflow, dbt, Kafka, Postgres, Streamlit |
| [distortion-library](https://github.com/VynJustHumant/distortion-library) | Physics-based image degradation for CV robustness. Differentiable, reproducible. | PyTorch |
| [math-aug](https://github.com/VynJustHumant/math-aug) | Deterministic mathematical art from algebraic formulas (vortices, particles, fractals). | NumPy, PyTorch |

## 🦴 Tech Stack

<div align="center">

**ML / Compute**

![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)

**Data Engineering**

![Airflow](https://img.shields.io/badge/Airflow-017CEE?style=flat-square&logo=apacheairflow&logoColor=white)
![dbt](https://img.shields.io/badge/dbt-FF694B?style=flat-square&logo=dbt&logoColor=white)
![Kafka](https://img.shields.io/badge/Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white)
![Postgres](https://img.shields.io/badge/Postgres-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat-square&logo=grafana&logoColor=white)

**Quality**

![pytest](https://img.shields.io/badge/pytest-0A9EDC?style=flat-square&logo=pytest&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

</div>

## 🌿 Featured — math-render-pipeline

> Not "math art". A **pipeline** whose payload happens to be math art.

- **Deterministic** — `formula_hash = sha256(spec)` ⇒ byte-identical PNGs
- **Two backends** — SQLite/Postgres metadata, filesystem/S3 artifacts
- **Batch + streaming** — Airflow DAG + Kafka/Redpanda consumer (idempotent on `render_id`)
- **Analytics** — dbt models → Grafana dashboards (CPU-min, renders/day, storage)
- **Live demo** — [math-render-pipeline.streamlit.app](https://math-render-pipeline.streamlit.app)

<div align="center">

<sub>🌿 Built with physics. Tested with rigor. Shipped as data. 🦴</sub>

</div>
